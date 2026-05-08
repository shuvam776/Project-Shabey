import api from "@/lib/axios";

const RAZORPAY_SCRIPT_URL = "https://checkout.razorpay.com/v1/checkout.js"
const loadRazorpayScript =() =>{
    return new Promise<void>((resolve,reject) =>{
        if(document.getElementById("razorpay-script")){
            resolve()
            return
        }

        const script = document.createElement("script")
        script.src = RAZORPAY_SCRIPT_URL
        script.id = "razorpay-script"
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error("Failed to load Razorpay script"))
        document.body.appendChild(script)
    })
}

export function useRazorpay(){


    async function createOrder(amount:number){
        const response = await api.post('/payment/create-order', {amount})
        return response.data
    }

    async function verifyPayment(razorpay_order_id:string, razorpay_payment_id:string, razorpay_signature:string){
        const response = await api.post('/payment/verify-order', {razorpay_order_id, razorpay_payment_id, razorpay_signature})
        return response.data
    }

    async function handlePayment(amount:number){
        await loadRazorpayScript()
        const order = await createOrder(amount)
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            order_id: order.id,
            handler: async (response: any) => {
                await verifyPayment(order.id, response.razorpay_payment_id, response.razorpay_signature)
            }
        }
        const rzp = new (window as any).Razorpay(options)
        rzp.open()
    }

    return { handlePayment,verifyPayment,createOrder }
}