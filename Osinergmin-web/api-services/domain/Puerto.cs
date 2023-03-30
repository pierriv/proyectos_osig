using System.Collections.Generic;

namespace ApiService.domain
{
    public class Puerto
    {
        public string mensaje { get; set; }
        public List<Data> data { get; set; }
        public int countData { get; set; }

        public string lastModificationDate { get; set; }
    }
}
