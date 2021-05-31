import { Button } from "@material-ui/core";
import { useEditor } from "../context/AppContext";

const CompileButton = () => {
  const { language, code, stdIn, setOutput, isSubmitting, setIsSubmitting } =
    useEditor();

  // Submit code to server
  const handleSubmission = async () => {
    setIsSubmitting(true);

    const body = JSON.stringify({
      script: code,
      stdin: stdIn,
      language,
    });

    const res = await fetch("/api/submission", {
      method: "post",
      body,
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    setOutput(data);

    setIsSubmitting(false);
  };

  return (
    <section>
      <Button variant="contained" color="primary" onClick={handleSubmission}>
        {isSubmitting ? "Compiling..." : "Run"}
      </Button>
    </section>
  );
};

export default CompileButton;
