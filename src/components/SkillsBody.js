import React from 'react'
import PageCard from './PageCard'

function SkillsBody() {

    const myStyle = { marginRight: "7.5%", marginLeft: "7.5%", marginTop: "50px" };

    return (
        <>
            <PageCard
                title={'Software Engineering'}
                body={''}
                img={""}>
            </PageCard>

            <PageCard
                title={'Software Languages'}
                body={'Java JavaScript Python HTML / CSS MIPS(Assembly Language) OCaml(Functional Programing) C#(Basic level) C++(Basic Level)'}
                img={""}>
            </PageCard>

            <PageCard
                title={'Software Development Skills'}
                body={'Front and backend web development. (HTML / CSS / JavaScript / React / MongoDB) Experience in Java, JavaFX, Data Structures, Design Patterns, HTML, CSS, JavaScript, Python, Ocaml, MIPS, C++, C# Using the java language to develop programs utilizing polymorphism, Recursion, concurrent programming'}
                img={""}>
            </PageCard>

            <PageCard
                title={'Electronics'}
                body={''}
                img={""}>
            </PageCard>

            <PageCard
                title={'Hardware Experience'}
                body={'Computer Components,  Arduino, Raspberry Pi, Eletronic components and sensors, 3D Printing hardware, Power Tools, '}
                img={""}>
            </PageCard>

            <PageCard
                title={'Eletronic Software Experience'}
                body={'Computer Bios System, Arduino IDE Software, Fusion 360, C.A.D Modeling Software, EasyEDA PCB Design Tool, 3D Printing Software (Cura)'}
                img={""}>
            </PageCard>

            <div style={myStyle}>
                <object data={"./PDF's/Scott Imandt - Resume Fall 2023.pdf "} type="application/pdf" width="100%" height="900px">
                    <p>Alternative text<a href="/Projects">to the PDF!</a></p>
                </object>
            </div>


        </>
    )
}

export default SkillsBody