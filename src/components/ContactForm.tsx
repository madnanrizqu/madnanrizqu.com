import { useState } from "react";
import { useForm } from "react-hook-form";

import classes from "./ContactForm.module.css";
import Alert from "./Alert";

type Inputs = {
  name: string;
  email: string;
  message: string;
};
const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit: validate,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handleSubmit = async (e: Inputs) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      for (let key in e) {
        formData.append(key, e[key as keyof Inputs]);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      setResponseMessage(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <form
      action="/"
      className={classes.contact__form}
      onSubmit={validate(handleSubmit)}
    >
      <div className={classes.contact__form_input_group}>
        <label className="cmn_label" htmlFor="name">
          Your name
        </label>
        <input
          type="text"
          id="name"
          minLength={3}
          size={18}
          disabled={isLoading}
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name?.message && (
          <span role="alert" className={classes.contact__form_error_label}>
            {errors.name?.message}
          </span>
        )}
      </div>
      <div className={classes.contact__form_input_group}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          size={18}
          disabled={isLoading}
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Entered value does not match email format",
            },
          })}
        />
        {errors.email?.message && (
          <span role="alert" className={classes.contact__form_error_label}>
            {errors.email?.message}
          </span>
        )}
      </div>
      <div className={classes.contact__form_input_group}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          cols={1}
          disabled={isLoading}
          aria-invalid={errors.email ? "true" : "false"}
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message?.message && (
          <span role="alert" className={classes.contact__form_error_label}>
            {errors.message?.message}
          </span>
        )}
      </div>
      <input
        type="submit"
        disabled={isLoading}
        value={isLoading ? "Loading..." : "Submit"}
        className="cmn_button--solid_secondary"
      />
      {responseMessage && (
        <Alert
          label={responseMessage}
          onClose={() => setResponseMessage(null)}
        />
      )}
    </form>
  );
};

export default ContactForm;
