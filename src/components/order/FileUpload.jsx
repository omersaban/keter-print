import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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

    // Reset input
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

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl flex items-center gap-3">
          <Upload className="w-6 h-6" />
          העלאת קבצי עיצוב (אופציונלי)
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        {/* Upload Area */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Upload className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                גררו קבצים לכאן או לחצו להעלאה
              </h3>
              <p className="text-gray-600 mb-4">
                קבצי PDF או JPG בלבד - עד 10MB לכל קובץ
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="gap-2"
              >
                <Upload className="w-4 h-4" />
                בחרו קבצים
              </Button>
            </div>
          </div>
        </div>

        <Input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Uploaded Files List */}
        {files.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-4">קבצים שהועלו:</h4>
            <div className="space-y-3">
              {files.map((fileUrl, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {fileUrl.includes('.pdf') ? (
                      <FileText className="w-5 h-5 text-red-500" />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-blue-500" />
                    )}
                    <span className="text-sm text-gray-700">
                      קובץ {index + 1} - {fileUrl.includes('.pdf') ? 'PDF' : 'JPG'}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      הועלה בהצלחה
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>טיפ:</strong> העלאת קבצי עיצוב תעזור לנו להבין בדיוק את הרצונות שלכם ולספק תוצאה מדויקת יותר.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
