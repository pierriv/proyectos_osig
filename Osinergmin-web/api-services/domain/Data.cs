using Newtonsoft.Json;
using System;

namespace ApiService.domain
{
    public class Data
    {
        public string indice { get; set; }
        public string codigo { get; set; }
        public string pais { get; set; }
        public DateTime? mes { get; set; }
        public double unidad30 { get; set; } = 0.0;
        public double unidad65 { get; set; } = 0.00;
        public double unidad125 { get; set; } = 0.00;
        public double unidad300 { get; set; } = 0.00;
        public double unidad1000 { get; set; } = 0.00;
        public double unidad50000 { get; set; } = 0.00;
        public double unidad500000 { get; set; } = 0.00;
        public string caracteristicas { get; set; }
        public DateTime? fechaHoraCierre { get; set; }
    }
}
