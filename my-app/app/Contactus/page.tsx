"use client";
import FooterDetails from "@/component/atom/Footer";
import Header from "@/component/atom/Header";
import { submitContactForm } from "./sendEmail";

export default function Contactus() {

    return (
        <>
            <Header />
            <section className="px-2 md:px-6 mt-6">
                <div className="max-w-xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
                            Contact us
                        </h2>
                        <p className="text-base leading-relaxed text-slate-600">
                            Have a question, need support, or want to discuss your next project? We’re here to help.
                        </p>
                    </div>

                    <form action={async (formData) => { await submitContactForm(formData); }} className="space-y-6">
                        <div>
                            <label htmlFor="name"
                                className="mb-2 text-slate-900 font-medium text-sm inline-block">Name</label>
                            <input type="text" id="name" name="name" placeholder="John doe"
                                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                        </div>
                        <div>
                            <label htmlFor="email"
                                className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
                            <input type="email" id="email" name="email" placeholder="john@readymadeui.com"
                                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="mb-2 text-slate-900 font-medium text-sm inline-block">Phone
                                number</label>
                            <input type="number" id="phone" name="phone" placeholder="+11800-259-854"
                                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                        </div>
                        <div>
                            <label htmlFor="company"
                                className="mb-2 text-slate-900 font-medium text-sm inline-block">Company</label>
                            <input type="text" id="company" name="company" placeholder="XYZ pvt. ltd."
                                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                        </div>
                        <div>
                            <label htmlFor="message"
                                className="mb-2 text-slate-900 font-medium text-sm inline-block">Message</label>
                            <textarea placeholder="Write message" id="message" name="message"
                                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"></textarea>
                        </div>

                        <button type="submit"
                            className="py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Send
                            message</button>
                    </form>
                    <br></br>
                </div>
            </section>
            <FooterDetails />
        </>
    )
}