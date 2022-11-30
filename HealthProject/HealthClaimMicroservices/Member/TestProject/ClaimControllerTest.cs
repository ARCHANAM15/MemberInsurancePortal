using AutoFixture;
using Claim.Controllers;
using Claim.Models;
using Claim.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;

namespace TestProject
{
    [TestClass]
    public class ClaimControllerTest
    {

        private Mock<IPolicyAddServices> mockPolicyAddServices;
        private Fixture fixture;
        PolicySubmissionController _policyController;
        PolicySubmissionController policyController;
        Mock<HealthCareDBContext> mockPolicyDBcontext;
        Mock<IConfiguration> mockConfi;

        public ClaimControllerTest()
        {


            fixture = new Fixture();
            mockPolicyAddServices = new Mock<IPolicyAddServices>();
            mockPolicyDBcontext = new Mock<HealthCareDBContext>();
            mockConfi = new Mock<IConfiguration>();
            IPolicyAddServices policyAddService = new PolicyAddServiceImp(mockConfi.Object, mockPolicyDBcontext.Object);
            _policyController = new PolicySubmissionController(policyAddService);
            policyController = new PolicySubmissionController(mockPolicyAddServices.Object);
        }

        [TestMethod]
        public void Test_getAllPolicyStatus()
        {
            dynamic result = policyController.GetAllPolicyStatus();
            Assert.IsNotNull(result);
        }


        [TestMethod]
        public void Test_getsavePolicy()
        {
            PolicyTble ptble = new PolicyTble();
            ptble.EffectiveDate = DateTime.Now;
            ptble.ModifiedDate = DateTime.Now;
            dynamic result = policyController.SubmitPolicy(ptble);
            Assert.AreEqual(200, result.StatusCode);

        }
        [TestMethod]
        public void Test_getupdatePolicy()
        {
            PolicyTble ptble = new PolicyTble();
            ptble.EffectiveDate = DateTime.Now;
            ptble.ModifiedDate = DateTime.Now;
            dynamic result = policyController.updatePolicy(ptble);
            Assert.AreEqual(200, result.StatusCode);

        }
    }

}
