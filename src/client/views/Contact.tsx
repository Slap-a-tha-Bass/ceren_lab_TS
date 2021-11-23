import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const [from, setFrom] = useState<ContactProps['from']>('');
    const [subject, setSubject] = useState<ContactProps['subject']>('');
    const [message, setMessage] = useState<ContactProps['message']>('');

    let disableBtn = true;
    if (from && subject && message) {
        disableBtn = false;
    }
    const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (from && subject && message) {
            fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ from, subject, message })
            })
                .then(res => res.json())
                .then(data => console.log(data))
        } else {
            Swal.fire({
                title: 'Oops!',
                icon: 'error',
                text: 'Please fill out all fields',
                confirmButtonText: 'Got it!'
            });
        }
        console.log({ from, subject, message });
    }

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-dark mt-3">Join Us</h1>
                    <form className="form-group p-3 border rounded shadow bg-dark text-light mt-3">
                        <label className="text-light m-2">From:</label>
                        <input value={from} onChange={e => setFrom(e.target.value)} type="text" className="form-control mb-2" placeholder="Enter valid email address" />
                        <label className="text-light m-2">Subject:</label>
                        <input value={subject} onChange={e => setSubject(e.target.value)} type="text" className="form-control mb-2" />
                        <label className="text-light m-2">Message:</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control mb-2" />
                        <button disabled={disableBtn} onClick={handleSubmitClick} className="btn btn-outline-light my-3">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

interface ContactProps {
    from: string,
    subject: string,
    message: string
}

export default Contact;