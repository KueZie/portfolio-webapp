using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;
using Newtonsoft.Json.Linq;

namespace DataLibrary
{
    public class JsonKeyReader
    {
        private string path;

        public delegate void HandleReadError(Exception e);
        public JsonKeyReader(string path_)
        {
            this.path = path_;
        }
        public string LoadJsonKey(string key, HandleReadError handler = null)
        {
            System.Diagnostics.Debug.WriteLine(this.path);
            try
            {
                using (StreamReader r = new StreamReader(this.path))
                {
                    JObject jsonObj = JObject.Parse(r.ReadToEnd());
                    Dictionary<string, string> keyValuePairs = jsonObj.ToObject<Dictionary<string, string>>();

                    string data;

                    bool hasData = keyValuePairs.TryGetValue(key, out data);

                    if (!hasData) return "";

                    return data;
                }
            }
            catch (Exception e)
            {
                if (!(handler is null))
                {
                    handler(e);
                }
            }

            return "";
        }
    }
}
