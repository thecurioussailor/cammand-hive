"use client";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Info, X } from 'lucide-react';
import Image from "next/image";

interface EnvVariable {
  id: number;
  name: string;
  value: string;
}

const EnvironmentVariables = () => {
  const [variables, setVariables] = useState<EnvVariable[]>([
    { id: 1, name: "", value: "" },
    { id: 2, name: "", value: "" },
    { id: 3, name: "", value: "" },
    { id: 4, name: "", value: "" }
  ]);

  const addVariable = () => {
    const newId = Math.max(...variables.map(v => v.id), 0) + 1;
    setVariables([...variables, { id: newId, name: "", value: "" }]);
  };

  const deleteVariable = (id: number) => {
    setVariables(variables.filter(v => v.id !== id));
  };

  const updateVariable = (id: number, field: 'name' | 'value', newValue: string) => {
    setVariables(variables.map(v => 
      v.id === id ? { ...v, [field]: newValue } : v
    ));
  };

  const saveAll = () => {
    console.log('Saving all variables:', variables);
  };

  return (
    <div className="h-full flex flex-col px-4 pb-6">
      <div className="flex justify-between py-6">
        <div className="flex items-center gap-2">
          <h2 className="text-[24px] font-semibold text-black">Environmental Variables</h2>
          <Dialog>
            <DialogTrigger>
                <Info className="w-[22px] h-[22px] mt-1" />
            </DialogTrigger>
            <DialogContent className="[&>button]:hidden">
              <DialogHeader className="gap-4">
                <DialogTitle className="text-[20px] font-semibold text-gray-800 flex items-center justify-between">Environment Variables – Usage Guide
                  <DialogClose className="rounded-sm text-gray-600 opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </DialogTitle>
                <DialogDescription>
                  <ul className="list-disc list-outside pl-5">
                    <li className="text-gray-800 text-[16px]">Define the environment variables your application requires to run.</li>
                    <li className="text-gray-800 text-[16px]">Use clear and meaningful names such as API_KEY, DATABASE_URL, AUTH_TOKEN, etc.</li>
                    <li className="text-gray-800 text-[16px]">All values will be securely encrypted and made accessible to your application during runtime.</li> 
                    <li className="text-gray-800 text-[16px]">Click “Save All” to apply and store your changes.</li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={addVariable}
            className="p-2 text-gray-600 hover:text-gray-800 bg-gray-50 rounded-md"
            title="Add variable"
          >
            <Image
              src={"/plus.svg"}
              alt="add"
              width={24}
              height={24}
            />
          </button>
          <button
            onClick={saveAll}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-md"
          >
            Save All
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {variables.map((variable) => (
          <div key={variable.id} className="grid grid-cols-2 gap-4 items-start bg-[#FCFCFD] rounded-[12px] border border-gray-200 p-5">
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-gray-800">
                Variable Name:
              </label>
              <input
                type="text"
                value={variable.name}
                onChange={(e) => updateVariable(variable.id, 'name', e.target.value)}
                placeholder="e.g, API_KEY"
                className="w-full h-10 px-3 bg-gray-100 rounded-md focus:border-orange-500 focus:ring-orange-500 text-sm placeholder-gray-400"
              />
            </div>
            
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="block text-sm font-medium text-gray-800">
                  Variable Value:
                </label>
                <input
                  type="text"
                  value={variable.value}
                  onChange={(e) => updateVariable(variable.id, 'value', e.target.value)}
                  placeholder="e.g, example"
                  className="w-full h-10 px-3 bg-gray-100 rounded-md focus:border-orange-500 focus:ring-orange-500 text-sm placeholder-gray-400"
                />
              </div>
              <button
                onClick={() => deleteVariable(variable.id)}
                className="mt-7 p-2 text-gray-400 bg-gray-50 border border-gray-200 rounded-md"
                title="Delete variable"
              >
                <Image
                  src={"/delete.svg"}
                  alt="delete"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentVariables;