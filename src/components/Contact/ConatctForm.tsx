"use client";
import { useState } from "react";
import Input from "./Input";
import Button from "../Button";

interface FormData {
  name: string;
  email: string;
  thoughts: string;
  message: string;
}

const contactFormFields: Array<{
  name: keyof FormData;
  type: string;
  placeholder: string;
  required: boolean;
  rows?: number;
}> = [
  { name: "name", type: "text", placeholder: "Your Name", required: true },
  { name: "email", type: "email", placeholder: "Your Email", required: true },
  {
    name: "thoughts",
    type: "text",
    placeholder: "Phone",
    required: true,
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Your Message",
    required: true,
    rows: 4,
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    thoughts: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const [error, setError] = useState<string | null>(null); // Handle errors

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable submit button during submission
    setError(null); // Reset error state

    try {
      const response = await fetch("/api/sendRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      // Reset form on successful submission
      setFormData({
        name: "",
        email: "",
        thoughts: "",
        message: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false); // Re-enable submit button
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg z-10">
      {contactFormFields.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          placeholder={field.placeholder}
          required={field.required}
          rows={field.rows}
        />
      ))}

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Submit Button */}
      {/* <button
        type="submit"
        disabled={isSubmitting} // Disable button during submission
        className="w-full text-white text-xl lg:text-2xl bg-gradient-to-r from-[#9747ff] to-[#3a78ff] rounded-[20px] p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button> */}
      <Button> {isSubmitting ? "Submitting..." : "Submit Request"}</Button>
    </form>
  );
}
