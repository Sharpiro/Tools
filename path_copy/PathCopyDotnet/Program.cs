﻿using System;
using System.IO;
using Microsoft.Win32;

namespace PathCopy
{
    public class Program
    {
        private static string UNCPath(string path)
        {
            if (path.StartsWith(@"\\")) return path;
            var key = Registry.CurrentUser.OpenSubKey("Network\\" + path[0]);
            if (key == null) return path;
            var remotePath = key.GetValue("RemotePath") as string;
            var extension = path.Remove(0, 2);
            return remotePath + extension;
        }

        static void Main(string[] args)
        {
            try
            {
                if (args.Length < 1 || args[0] == null || args[0].Length < 2) return;

                var result = UNCPath(args[0]);
                Kolibri.Clippy.PushStringToClipboard(result);
            }
            catch (Exception ex)
            {
                var path = $@"{Environment.GetEnvironmentVariable("userprofile")}\pathcopy\debug.log";  // todo: change to running dir
                File.AppendAllText(path, $"{args[0]}\r\n{ex.ToString()}");
            }
        }
    }
}
