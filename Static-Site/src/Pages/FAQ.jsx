
import '../styles/FAQ.css';


function FAQ() {
    return (
        <div className="faq-container">
            <div className="title-container">
                <h1 className="faq-title">FAQ</h1>
           </div>
            
            <div className="bubbled-rectangle">
                <div className="inner-rectangle">
                    <p>Do I need to have experience in programming?</p>
                </div>
                <div className="text-content">
                    <p>While it does help, we take a lot of consideration and have lots of events that require no experience such as MiniHack.</p>
                </div>
            </div>


            <div className="bubbled-rectangle">
                <div className="inner-rectangle">
                    <p>Are the Hackathons free of entry?</p>
                </div>
                <div className="text-content">
                    <p>Yes! All events ran by BroncoHacks are free of charge to enter!</p>
                </div>
            </div>

           <div className="bubbled-rectangle">
                <div className="inner-rectangle">
                    <p>Can non-CPP students participate?</p>
                </div>
                <div className="text-content">
                    <p>Only for select Hackathons, like the one happening this upcoming Fall is open to all students!</p>
                </div>
            </div>
            

        </div>
    );
}

export default FAQ;





