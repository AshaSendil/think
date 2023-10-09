"use client"
import { useFormik } from "formik";
import * as Yup from 'yup'; // Import Yup for validation


export default function RegisterForm() {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          comments: false, // Initialize checkbox value
        },
        validationSchema: Yup.object({
          name: Yup.string().required('First Name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email address is required'),
          comments: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <>
    <form>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 space-y-6">
          <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.comments}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <p className="text-gray-500">
              I agree to the terms and conditions and privacy policy of sooru
            </p>
          </div>
        </div>
        {formik.touched.comments && formik.errors.comments ? (
          <div className="text-red-500">{formik.errors.comments}</div>
        ) : null}
          </div>
          <div className="text-center">
            <h1>or</h1>
          </div>
          <div className="text-center">
            <button className="w-full h-12 bg-red-400 text-white rounded-md hover:bg-red-700">
              Sign up with Google
            </button>
            
          </div>
        </div>
      </div>
    </form>
    <p className="mt-10 text-center text-sm text-gray-500">
            alredy have a account?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-red-600 hover:text-red-500"
            >
                Sign in
            </a>
          </p>
    </>
  );
}
