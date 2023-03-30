using ApiService.Config;
using ApiService.domain;
using ExcelDataReader;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;

namespace ApiService.Service.impl
{
    public class Excel : IExcel
    {

        AppSettings settings;
        public Excel(AppSettings _settings) { 
            settings = _settings;
        }

        public Puerto leer()
        {
            Puerto puerto = new Puerto();
            Data data;
            string fileName = settings.ruta;
            FileInfo archivo = new FileInfo(fileName);
            //try
            //{
            //    using (StreamReader jsonStream = File.OpenText(settings.rutaJson))
            //    {
            //        var json = jsonStream.ReadToEnd();
            //        puerto = JsonConvert.DeserializeObject<Puerto>(json);
            //    }
            //    if (puerto.lastModificationDate == (archivo.LastWriteTime == null ? "" : archivo.LastWriteTime.ToString())) return puerto;
            //    File.Delete(settings.rutaJson);
            //}
            //catch (Exception ex)
            //{
            //}

            try
            {
                using (var stream = File.Open(fileName, FileMode.Open, FileAccess.Read,FileShare.Read))
                {
                    System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
                    using (var reader = ExcelReaderFactory.CreateReader(stream))
                    {
                        var result = reader.AsDataSet(new ExcelDataSetConfiguration()
                        {
                            ConfigureDataTable = (data) => new ExcelDataTableConfiguration()
                            {
                                UseHeaderRow = true
                            }
                        });

                        DataTableCollection table = result.Tables;
                        DataTable resultTable = table["Resumen"];
                        int countData = resultTable.Rows.Count;
                        List<Data> datas = new List<Data>();
                        for (int i = 0; i < countData; i++)
                        {
                            if (i < 5) continue;
                            data = new Data();
                            DataRow row = resultTable.Rows[i];
                            if (row[0].ToString() == "" || row[0].ToString() == DBNull.Value.ToString())
                            {
                                break;
                            }
                            data.indice = row[0].ToString();
                            data.codigo = row[1].ToString();
                            data.pais = row[2].ToString();
                            data.mes = (DateTime)row[3];
                            data.unidad30 = Convert.ToDouble(row[4].ToString());
                            data.unidad65 = Convert.ToDouble(row[5].ToString());
                            data.unidad125 = Convert.ToDouble(row[6].ToString());
                            data.unidad300 = Convert.ToDouble(row[7].ToString());
                            data.unidad1000 = Convert.ToDouble(row[8].ToString());
                            data.unidad50000 = Convert.ToDouble(row[9].ToString());
                            data.unidad500000 = Convert.ToDouble(row[10].ToString());
                            datas.Add(data);                            
                        }
                        puerto.data = datas;
                        puerto.countData = datas.Count;
                        puerto.mensaje = "Se ha terminado de leer el archivo";
                    }
                }
            }
            catch (Exception ex)
            {                
                puerto.mensaje = ex.Message;
            }
            return puerto;
        }
    }
}
