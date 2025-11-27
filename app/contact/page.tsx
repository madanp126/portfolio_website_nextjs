import Contact from "../components/contact";

export default function ContactPage(){
    return(
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-semibold"> Get in Touch</h1>
                <p className="mt-2 text-sm text-slate-400">
                    Have a project in mind? Send a message or connect me on LinkedIn.
                </p>
            </header>
            <Contact/>
        </div>
    );
}