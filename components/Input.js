import { useContext } from "react";
import { Formik, Form, Field, } from "formik";
import { PromptContext } from "../context/PromptContext";
import { useQuery } from "react-query"



const initialValues = {
    pitchType: "",
    orgType: "",
    role: "",
    skills: "",
    tone: "",
    additionalInfo: "",
}

const Input = () => {
  const { setPromptValues } = useContext(PromptContext);

  //const formik = useFormik({initialValues: initialValues, onSubmit:handleFormSubmit});

  return (
    <div className="h-full w-full lg:w-1/2">
        <Formik initialValues={initialValues} onSubmit={(values) => setPromptValues(values)}>
            {() => (
                <Form className="w-[90%] lg:w-2/5 rounded bg-zinc-800 flex flex-col justify-evenly items-start gap-4">
                    <Field name="pitchType" as="select" className="border border-black rounded h-12 w-[80%] font-semibold text-xl">
                        <option value="">Select</option>
                        <option value="Referral">Referral</option>
                        <option value="Cover Letter">Cover Letter</option>
                    </Field>
                    <Field name="orgType" as="select" className="border border-black rounded h-12 w-[80%] font-semibold text-xl">
                        <option value="">Select</option>
                        <option value="Startup">Startup</option>
                        <option value="MNC">MNC</option>
                    </Field>                    
                    <Field name="role" type="text" className="border border-black rounded h-12 w-[80%] font-semibold text-xl">
                    </Field>                    
                    <Field name="skills" type="text" className="border border-black rounded h-12 w-[80%] font-semibold text-xl">
                    </Field>                    
                    <Field name="tone" as="select" className="border border-black rounded h-12 w-[80%] font-semibold text-xl">
                        <option value="">Select</option>
                        <option value="Confident">Confident</option>
                        <option value="Ambitious">Ambitious</option>
                        <option value="Assertive">Assertive</option>
                    </Field>
                    <Field name="additionalInfo" type="text" className="border border-black rounded h-12 w-[80%] font-semibold text-xl">
                    </Field>                    
                    <button type="submit">Generate Pitch</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default Input