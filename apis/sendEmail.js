
import emailjs from '@emailjs/browser';

export const sendEmail = async (form,setLoading,reset,setSuccessMessage,setErrorMessage) => {
    setLoading(true)
    emailjs.sendForm('service_nz5acud', 'template_d9atzno', form.current, {
            publicKey: '2sPYpZ9p9x2TrjE10',
          })
          .then(
            () => {
              setSuccessMessage("The message was sent! Your request will be confirmed via email or private message")
              setLoading(false)
              reset()
            },
            (error) => {
              setErrorMessage("Something Went Wrong, Please Try Again!")
              setLoading(false)
            },
          );
};
