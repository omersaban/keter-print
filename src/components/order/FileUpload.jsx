import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Upload, FileText, Image as ImageIcon, X } from "lucide-react";

export default function FileUpload({ files, onFileUpload, onRemoveFile }) {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files).filter(
      file => file.type === "application/pdf" || file.type === "image/jpeg"
    );
    if (selectedFiles.length > 0) {
      onFileUpload(selectedFiles);
    }
    e.target.value = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      file => file.type === "application/pdf" || file.type === "image/jpeg"
    );
    if (droppedFiles.length > 0) {
      onFileUpload(droppedFiles);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <Card className="border-0 shadow-lg max-w-2xl mx-auto overflow-hidden">
      {/* Header קומפקטי */}
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3">
        <CardTitle className="text-base flex items-center gap-2 font-bold">
          <Upload className="w-4 h-4" />
          העלאת קבצי עיצוב (אופציונלי)
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-3">
        {/* אזור העלאה דק במבנה אופקי */}
        <div
          className="border-2 border-dashed border-gray-200 rounded-lg p-3 flex items-center justify-between hover:border-purple-300 hover:bg-purple-50/30 transition-all cursor-pointer group"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <Upload className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-right">
              <h3 className="text-sm font-bold text-gray-900 leading-none mb-1">
                לחצו כאן או גררו קבצים
              </h3>
              <p className="text-[11px] text-gray-500 leading-none">
                PDF או JPG בלבד (עד 10MB)
              </p>
            </div>
          </div>
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-8 text-xs border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            בחירת קבצים
          </Button>
        </div>

        <Input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* רשימת קבצים - מופיעה רק אם יש קבצים */}
        {files.length > 0 && (
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {files.map((fileUrl, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-md border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  {fileUrl.includes('.pdf') ? (
                    <FileText className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                  ) : (
                    <ImageIcon className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  )}
                  <span className="text-[11px] text-gray-700 truncate font-medium">
                    קובץ {index + 1}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFile(index);
                  }}
                  className="h-5 w-5 p-0 text-gray-400 hover:text-red-600"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Tip Box דקיק */}
        <div className="mt-3 py-1.5 px-3 bg-blue-50/50 rounded-md border border-blue-100">
          <p className="text-[10px] text-blue-800 text-center">
             העלאת קבצים עוזרת לנו לספק לכם תוצאה מדויקת ומהירה יותר.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
