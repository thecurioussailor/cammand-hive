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
    <div className="h-full p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-900">Environmental Variables</h2>
          <Dialog>
            <DialogTrigger>
                <Info className="w-4 h-4 mt-1" />
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
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md"
            title="Add variable"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
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
          <div key={variable.id} className="grid grid-cols-2 gap-4 items-start">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Variable Name:
              </label>
              <input
                type="text"
                value={variable.name}
                onChange={(e) => updateVariable(variable.id, 'name', e.target.value)}
                placeholder="e.g, API_KEY"
                className="w-full h-10 px-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500 text-sm placeholder-gray-400"
              />
            </div>
            
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Variable Value:
                </label>
                <input
                  type="text"
                  value={variable.value}
                  onChange={(e) => updateVariable(variable.id, 'value', e.target.value)}
                  placeholder="e.g, example"
                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-orange-500 text-sm placeholder-gray-400"
                />
              </div>
              <button
                onClick={() => deleteVariable(variable.id)}
                className="mt-7 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md"
                title="Delete variable"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3,6 5,6 21,6"/>
                  <path d="M19,6v14a2,2 0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v2"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentVariables;