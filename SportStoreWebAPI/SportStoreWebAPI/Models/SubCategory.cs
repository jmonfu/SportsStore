using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SportStoreWebAPI.Models
{
    public class SubCategory
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }


        //Category
        public int CategoryId { get; set; }
        public Category Category { get; set; }

    }
}