import { RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export const UndoButton = () => {
  const handleUndo = () => {
    // This is a placeholder for now - we'll need to implement actual undo logic
    toast.info("Undo feature coming soon!");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleUndo}
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg hover:shadow-xl"
      title="Undo last change"
    >
      <RotateCcw className="h-4 w-4" />
    </Button>
  );
};