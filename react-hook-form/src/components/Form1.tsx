// import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { Link } from "react-router-dom";
// import * as yup from "yup";

// const schema = yup.object({
//   username2: yup.string().required("You have to write Username"),
//   email2: yup.string().email().required("You have to write Email"),
//   chanel2: yup.string().required("You have to write Channel name"),
// });

interface formData {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  pNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
}

const Form1 = () => {
  const form = useForm<formData>({
    defaultValues: {
      username: "blackBeard",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      pNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
    mode: "onBlur", // onChange , onTouched , all - modları var
    // resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState,
    control,
    watch,
    getValues,
    setValue,
    reset,
    trigger,
  } = form;
  const {
    errors,
    dirtyFields,
    touchedFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitSuccessful,
    submitCount,
    isSubmitted,
  } = formState;
  console.log({ isSubmitSuccessful, isSubmitted, isSubmitting, submitCount });

  console.log({ dirtyFields, touchedFields });

  const { fields, append, remove } = useFieldArray({
    name: "pNumbers",
    control,
  });

  // const watchUsername = watch(['username' , 'email'])
  const watchUsername = watch("username");
  const watchAllFormData = watch();

  // APIDEN DATANI GETIRIB DEFAULT VALUE VERMEK UCUN BELE ISTIFADE OLUNA BILIR
  // const form = useForm<formData>({
  //   defaultValues: async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users/1"
  //     );
  //     const data = await response.json();
  //     return {
  //       username: "User",
  //       email: data.email,
  //       channel: "",
  //     };
  //   },
  // });

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  const onError = (error: FieldErrors<formData>) => {
    console.log(error);
  };

  const getValueaHandler = () => {
    console.log("🚀 ~ getValueaHandler ~ getValues:", getValues());
    console.log("🚀 ~ getValueaHandler ~ getValues:", getValues("username"));
    console.log(
      "🚀 ~ getValueaHandler ~ getValues:",
      getValues(["username", "age"])
    );
  };

  const setValueHandler = () => {
    setValue("username", "Hey There", {
      // shouldDirty: true,
      // shouldTouch: true,
      // shouldValidate: true
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div>
      <br />
      <Link to="/"> = Home = </Link> <br />
      <br />
      <br />
      {watchUsername}
      {JSON.stringify(watchAllFormData)}
      <br /> <br />
      <br />
      <form action="" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
          <label htmlFor="usernam">Username</label> &nbsp;&nbsp;
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "You need to Write Username",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.username?.message}</b>
        </div>
        <br /> <br />
        <div>
          <label htmlFor="email">Email</label> &nbsp;&nbsp;
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email Format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" || "Enter different Email"
                  );
                },
                blackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("badmail.com") ||
                    "This email is not supported"
                  );
                },
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const data = await response.json();
                  return data.length == 0 || "Email is already in database";
                },
              },
              required: "You need to write email ",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.email?.message}</b>
        </div>
        <br /> <br />
        <div>
          <label htmlFor="channel">Channel</label> &nbsp;&nbsp;
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: "You need to write Channel Name",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.channel?.message}</b>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="twitter">Twitter</label> &nbsp;&nbsp;
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: "You need to write twitter Name",
              disabled: watch("channel") === "",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.social?.twitter?.message}</b>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="facebook">Facebook</label> &nbsp;&nbsp;
          <input
            type="text"
            id="facebook"
            {...register("social.facebook", {
              required: "You need to write facebook Name",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.social?.facebook?.message}</b>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="facebook">Primary Phone Number</label> &nbsp;&nbsp;
          <input
            type="number"
            id="p-phone"
            {...register("phoneNumbers.0", {
              required: "You need to write p-phone Name",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.phoneNumbers?.[0]?.message}</b>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="facebook">Secondary Phone Number</label> &nbsp;&nbsp;
          <input
            type="number"
            id="s-phone"
            {...register("phoneNumbers.1", {
              required: "You need to write s-phone Name",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.phoneNumbers?.[1]?.message}</b>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="pNumbers">Phone Numbers</label>
          <div>
            {fields.map((item, index) => (
              <div key={item.id}>
                <input
                  key={item.id}
                  type="number"
                  {...register(`pNumbers.${index}.number` as const)}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove Phone
                  </button>
                )}
              </div>
            ))}
            <br />
            <button onClick={() => append({ number: "" })} type="button">
              Add Phone
            </button>
          </div>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="age">Age</label> &nbsp;&nbsp;
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: "You need to write Age",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.age?.message}</b>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="dob">Date of Birth</label> &nbsp;&nbsp;
          <input
            type="date"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: "You need to write dob",
            })}
          />{" "}
          <br />
          <b style={{ color: "red" }}>{errors.dob?.message}</b>
        </div>
        <br />
        <br />
        <button disabled={!isDirty || !isValid}>Send Form</button> &nbsp;&nbsp;
        <button type="button" onClick={() => reset()}>
          Reset
        </button>{" "}
        &nbsp;&nbsp;
        <button onClick={getValueaHandler}>Get Values</button> &nbsp;&nbsp;
        <button onClick={() => trigger()}>Trigger Form</button> &nbsp;&nbsp;
        <button type="button" onClick={setValueHandler}>
          Set Value
        </button>
      </form>
    </div>
  );
};

export default Form1;
