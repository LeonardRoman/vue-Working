﻿using datagrid_mvc5.Models;
using DevExtreme.AspNet.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using System.Web.WebSockets;

namespace datagrid_mvc5.Controllers
{

    public class OrdersController : Controller
    {


        public ActionResult Index()
        {
            var usedCustomers = from o in _db.Orders
                                select new
                                {
                                    Id = o.CustomerID,
                                    Name = o.Customer.ContactName,
                                };
            var usedCust = usedCustomers.Distinct().ToList();
            var sb = new StringBuilder();
            foreach (var cust in usedCust)
            {
                sb.Append("{Id=\"" + cust.Id + "\",Name=\"" + cust.Name + "\"},");
            }

            ViewBag.customers = sb.ToString();
            return View();
        }
        public ActionResult Edit(int id = 0)
        {
            ViewBag.Id = id;
            return View();
        }

        Northwind _db = new Northwind();

        [HttpGet]
        public ActionResult Get(DataSourceLoadOptions loadOptions)
        {


            loadOptions.PrimaryKey = new[] { "OrderID" };
            var ordersQuery = from o in _db.Orders
                              select new
                              {
                                  o.OrderID,
                                  o.CustomerID,
                                  //                                  CustomerName = o.Customer.ContactName,
                                  o.EmployeeID,
                                  EmployeeName = o.Employee.FirstName + " " + o.Employee.LastName,
                                  o.OrderDate,
                                  o.RequiredDate,
                                  o.ShippedDate,
                                  o.ShipVia,
                                  ShipViaName = o.Shipper.CompanyName,
                                  o.Freight,
                                  o.ShipName,
                                  o.ShipAddress,
                                  o.ShipCity,
                                  o.ShipRegion,
                                  o.ShipPostalCode,
                                  o.ShipCountry
                              };

            var loadResult = DataSourceLoader.Load(ordersQuery, loadOptions);
            return Content(JsonConvert.SerializeObject(loadResult), "application/json");
        }

        [HttpGet]
        public ActionResult GetShipCountry(DataSourceLoadOptions loadOptions)
        {
            var ordersQuery = from o in _db.Orders
                              select new
                              {
                                  o.ShipCountry
                              };
            var json = JsonConvert.SerializeObject(ordersQuery.Distinct().ToList());
            return Content(json, "application/json");
        }

        [HttpPut]
        public ActionResult Put(int key, string values)
        {
            var order = _db.Orders.Find(key);
            JsonConvert.PopulateObject(values, order);
            if (!TryValidateModel(order))
            {
                Response.StatusCode = 400;
                return Content(ModelState.GetFullErrorMessage(), "text/plain");
            }
            _db.SaveChanges();
            return new EmptyResult();
        }

        [HttpPost]
        public ActionResult Post(string values)
        {
            var order = new Order();
            JsonConvert.PopulateObject(values, order);
            if (!TryValidateModel(order))
            {
                Response.StatusCode = 400;
                return Content(ModelState.GetFullErrorMessage(), "text/plain");
            }
            _db.Orders.Add(order);
            _db.SaveChanges();

            return new EmptyResult();
        }

        [HttpDelete]
        public ActionResult Delete(int key)
        {
            var order = _db.Orders.Find(key);
            _db.Orders.Remove(order);
            _db.SaveChanges();
            return new EmptyResult();
        }

        [HttpGet]
        public ActionResult GetById(int key)
        {
            var order = _db.Orders.Find(key);
            string errStr = JsonConvert.SerializeObject(order);
            return Content(errStr, "application/json");
        }

        [HttpGet]
        public ActionResult Validate(int id, string json)
        {
            var order = _db.Orders.Find(id);

            JsonConvert.PopulateObject(json, order);
            var errors = _db.GetValidationErrors();
            StringBuilder errorsD = new StringBuilder("{");
            foreach (DbEntityValidationResult validationError in errors)
            {
                foreach (DbValidationError err in validationError.ValidationErrors)
                {
                    errorsD.AppendFormat(@"""{0}"":""{1}"",", err.PropertyName,
                        err.ErrorMessage.Replace("\"", "'"));
                }
            }

            if (errorsD.Length > 1)
            {
                errorsD.Remove(errorsD.Length - 1, 1);//remove last comma
            }
            errorsD.Append("}");
            return Content(errorsD.ToString(), "application/json");
        }

        [HttpGet]
        public ActionResult AvaialbeEmploers()
        {
            var product = from o in _db.Employees
                          select new
                          {
                              Id = o.EmployeeID,
                              Name = o.FirstName + " " + o.LastName
                          };
            string errStr = JsonConvert.SerializeObject(product);
            return Content(errStr, "application/json");
        }

        [HttpGet]
        public ActionResult AvaialbeCustomers()
        {
            var product = from o in _db.Customers
                          select new
                          {
                              Id = o.CustomerID,
                              Name = o.ContactName,
                          };
            string errStr = JsonConvert.SerializeObject(product);
            return Content(errStr, "application/json");
        }


        #region Получение списка селектом


        [HttpGet]
        public ActionResult AvaiableCityList(string region, string country)
        {
            List<SqlParameter> parameters = new List<SqlParameter>();
            string query = "Select distinct ShipCity from orders where {ShipCountry} {ShipRegion}  1=1";
            query = MadeParam("ShipCountry", country, parameters, query);
            query = MadeParam("ShipRegion", region, parameters, query);

            return GetActionResult(query, parameters);
        }


        [HttpGet]
        public ActionResult AvaiableCountrys(string region)
        {
            List<SqlParameter> parameters = new List<SqlParameter>();
            string query = "Select distinct ShipCountry from orders where  {ShipRegion}  1=1";
            query = MadeParam("ShipRegion", region, parameters, query);

            return GetActionResult(query, parameters);
        }

        [HttpGet]
        public ActionResult AvaiableRegions()
        {
            string query = "Select distinct ShipRegion from orders";
            return GetActionResult(query);
        }

        #endregion
        #region query
        /// <summary>
        /// получение коллекции запросом
        /// </summary>
        /// <param name="query"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        private ActionResult GetActionResult(string query, List<SqlParameter> parameters = null)
        {
            if (parameters == null) parameters = new List<SqlParameter>();
            var resList = _db.Database.SqlQuery<string>(query, parameters.ToArray()).ToList();

            string json = JsonConvert.SerializeObject(resList);
            return Content(json, "application/json");
        }

        private static string MadeParam(string name, string paramValue, List<SqlParameter> parameters, string query)
        {
            var prarString = String.Empty;
            if (!string.IsNullOrEmpty(paramValue))
            {
                prarString = name + " = @" + name + " and";
                if (paramValue == "null")
                {
                    prarString = name + " is null and";
                }
                else
                {
                    parameters.Add(new SqlParameter(name, SqlDbType.Char) { Value = paramValue });
                }
            }

            query = query.Replace("{" + name + "}", prarString);
            return query;
        }
        #endregion
    }

}