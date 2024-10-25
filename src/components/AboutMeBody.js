import React from 'react'
import PageCard from './PageCard'
import CardContainer from './CardContainer';

function AboutMeBody() {

    const myStyle = { marginRight: "7.5%", marginLeft: "7.5%", marginTop: "50px" };


    const educationComponents = [<PageCard
        title={'Stony Brook University - Computer Science Major'}
        body={"Stony Brook, one of America’s most dynamic public universities, is New York’s flagship university and No. 1 public university. Stony Brook is part of the State University of New York (SUNY) system, a center of academic excellence and an internationally recognized research institution that offers all students a world-class education. Bachelor's in Computer Science: August 2021 - May 2024"}
        img={"./images/Other/Stony_Brook_University_seal.svg.png"}>
    </PageCard>,

    <PageCard
        title={'Suffolk County Community College'}
        body={'Suffolk County Community College (SCCC) is the largest community college in The State University of New York (SUNY) system. SCCC is a comprehensive publicly-supported, two-year, open enrollment institution, with campuses in Selden, Riverhead and Brentwood, and downtown centers in Sayville and Riverhead. Attended: August 2018 - June 2021'}
        img={"./images/Other/Suffolk logo.jpg"}>
    </PageCard>,

    <PageCard
        title={'Hauppauge High School'}
        body={'Hauppauge High School is a public high school and part of the Hauppauge Union Free School District located in Hauppauge, Suffolk County, Long Island, in the U.S. state of New York. Graduated With High School Diploma:  June 2018'}
        img={"./images/Other/Hauppauge logo.jpg"}>
    </PageCard>]

    return (
        <>
            <PageCard
                title={'About Me'}
                body={'I am a recent Computer Science graduate from Stony Brook University with a strong background in programming, project management, and team leadership. During my studies, I led impactful projects such as CICaidA, a portable device that monitors patient vitals, where I optimized hardware and software for efficiency and comfort. I also developed \'Earth Uncharted\', a Unity game combining drawing and geography to enhance spatial awareness, overseeing the project from prototyping to public playtesting. My technical skills include Java, JavaScript, Python, C, Assembly, and C++. I am proficient in development environments like Eclipse, Visual Studio Code, and Arduino IDE, and experienced with Git for version control. Additionally, I have hands-on experience with BIOS systems, CAD software (Fusion 360), PCB design (EasyEDA), and 3D printing.'}
                img={""}>
            </PageCard>

            <CardContainer title={'Education'} Cards={educationComponents}></CardContainer>

            <div className='Resume' style={myStyle}>
                <object data={"./PDF's/Scott Imandt - Master Fall 2024.pdf"} type="application/pdf" width="100%" height="900px">
                    <p>Alternative text<a href="#/Projects">to the Projects</a></p>
                </object>
            </div>
        </>
    )
}

export default AboutMeBody