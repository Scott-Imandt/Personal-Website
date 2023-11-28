import React from 'react'
import PageCard from './PageCard'

function AboutMeBody() {
    const myStyle = {marginRight: "7.5%", marginLeft: "7.5%", marginTop:"50px"};
    
    
    return (
        <>
            <PageCard
                title={'About Me'}
                body={'As a Computer Science major at Stony Brook University, my research and personal projects have provided me with extensive experience in teamwork, problem-solving, and communication. In particular, I have contributed to several research projects, including the VIP Biomedical Engineering Team CICaidA and The Game Developer Project Dividing Line, which have challenged me to develop my technical and interpersonal skills. Additionally, I have completed numerous personal projects, such as a M.E.R.N application, Java/JavaFX projects, and an Android/Arduino app, in which I have honed my programming skills using languages such as Java, JavaScript, Python, Assembly, and C++. In terms of technology, I have worked with a range of programming environments, including Eclipse, Visual Studio Code, Net Beans, Arduino IDE, and Sublime. Additionally, I am also familiar with computer bios systems, Fusion 360 C.A.D software, EasyEDA PCB design, and 3D printing software like Cura, Sli3r, and OctoPrint. Alongside my technical abilities, I possess strong personal skills such as leadership, teamwork, and product development, which have been developed through my academic and personal projects. Furthermore, my experience as a computer sales associate at Best Buy and a retail service representative at Uncle Guiseppie has allowed me to refine my customer service and communication skills. I look forward to leveraging my skills and experiences to contribute to the field of Computer Science after graduating.'}
                img={""}>
            </PageCard>

            <PageCard
                title={'Education'}
                body={''}
                img={""}>
            </PageCard>

            <PageCard
                title={'Stony Brook University - Computer Science Major'}
                body={"Stony Brook, one of America’s most dynamic public universities, is New York’s flagship university and No. 1 public university. Stony Brook is part of the State University of New York (SUNY) system, a center of academic excellence and an internationally recognized research institution that offers all students a world-class education. Actively Attending:   August 2021 - Present"}
                img={"./images/Other/Stony_Brook_University_seal.svg.png"}>
            </PageCard>

            <PageCard
                title={'Suffolk County Community College'}
                body={'Suffolk County Community College (SCCC) is the largest community college in The State University of New York (SUNY) system. SCCC is a comprehensive publicly-supported, two-year, open enrollment institution, with campuses in Selden, Riverhead and Brentwood, and downtown centers in Sayville and Riverhead. Attended:  August 2018 - June 2021'}
                img={"./images/Other/Suffolk logo.jpg"}>
            </PageCard>

            <PageCard
                title={'Hauppauge High School'}
                body={'Hauppauge High School is a public high school and part of the Hauppauge Union Free School District located in Hauppauge, Suffolk County, Long Island, in the U.S. state of New York. Graduated With High School Diploma:  June 2018'}
                img={"./images/Other/Hauppauge logo.jpg"}>
            </PageCard>

            <div className='Resume' style={myStyle}>
                <object data={"./PDF's/Scott Imandt - Resume Winter 2023.pdf "} type="application/pdf" width="100%" height="900px">
                    <p>Alternative text<a href="./PDF's/Scott Imandt - Resume Winter 2023.pdf">to the PDF!</a></p>
                </object>
            </div>
        </>
    )
}

export default AboutMeBody