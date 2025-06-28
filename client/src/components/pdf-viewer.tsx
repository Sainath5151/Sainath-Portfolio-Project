import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function PDFViewer() {
  const [pdfError, setPdfError] = useState(false);

  // In a real implementation, you would use @react-pdf-viewer/core
  // For now, we'll show a placeholder that matches the design
  
  return (
    <Card className="bg-scorpion-gray border-scorpion-light-gray">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-scorpion-yellow flex items-center">
          <FileText className="mr-3 h-6 w-6" />
          Professional Resume
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="bg-white rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
          style={{ height: '600px' }}
        >
          <div className="text-center text-gray-600">
            <FileText className="h-16 w-16 text-red-500 mb-4 mx-auto" />
            <p className="text-lg font-semibold mb-2">PDF Viewer</p>
            <p className="text-sm mb-4">Sainath Panpatte Resume.pdf</p>
            <p className="text-xs text-gray-500 mb-4 max-w-md">
              PDF viewer functionality requires @react-pdf-viewer/core integration.
              The resume would be displayed here in a real implementation.
            </p>
            <div className="flex gap-2 justify-center">
              <Button 
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={() => {
                  // In a real app, this would download the actual PDF
                  alert("Download functionality would be implemented here");
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  // In a real app, this would open the PDF in a new tab
                  alert("View in new tab functionality would be implemented here");
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in New Tab
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
