import React from 'react'
import PageCard from './PageCard'
import CardContainer from './CardContainer';
import "./SkillCards.css"

function SkillsBody() {


    const softwareEngineeringComponents = [

        <div className="skillDiv">
            <PageCard
                title={'LeetCode'}
                body={<img src="https://leetcard.jacoblin.cool/Scott_Imandt?theme=nord&amp;font=Lobster" alt="LeetCode Stats" id='leetcode'></img>}
                img={""}>
            </PageCard>

            <PageCard
                title={'HackerRank Badges'}
                body={
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <object type="image/svg+xml" align="center" data="https://www.hackerrankapi.scottimandt.com/?username=luigiandscott&badge=python">Your browser does not support SVG (HackerRank-Badge)</object>
                        <object type="image/svg+xml" align="center" data="https://www.hackerrankapi.scottimandt.com/?username=luigiandscott&badge=sql">Your browser does not support SVG (HackerRank-Badge)</object>
                        <object type="image/svg+xml" align="center" data="https://www.hackerrankapi.scottimandt.com/?username=luigiandscott&badge=java">Your browser does not support SVG (HackerRank-Badge)</object>
                    </div>}
                img={""}>
            </PageCard>
        </div>,


        <PageCard
            title={'Software Languages'}
            body={'Java JavaScript Python HTML / CSS MIPS(Assembly Language) OCaml(Functional Programing) C#(Basic level) C++(Basic Level)'}
            img={""}>
        </PageCard>,

        <PageCard
            title={'Software Development Skills'}
            body={'Front and backend web development. (HTML / CSS / JavaScript / React / MongoDB) Experience in Java, JavaFX, Data Structures, Design Patterns, HTML, CSS, JavaScript, Python, Ocaml, MIPS, C++, C# Using the java language to develop programs utilizing polymorphism, Recursion, concurrent programming'}
            img={""}>
        </PageCard>]

    const electronicsComponents = [<PageCard
        title={'Hardware Experience'}
        body={'Computer Components,  Arduino, Raspberry Pi, Eletronic components and sensors, 3D Printing hardware, Power Tools, '}
        img={""}>
    </PageCard>,

    <PageCard
        title={'Eletronic Software Experience'}
        body={'Computer Bios System, Arduino IDE Software, Fusion 360, C.A.D Modeling Software, EasyEDA PCB Design Tool, 3D Printing Software (Cura)'}
        img={""}>
    </PageCard>]


    const myStyle = { marginRight: "7.5%", marginLeft: "7.5%", marginTop: "50px" };

    return (
        <>
            <CardContainer title={'Software Engineering'} Cards={softwareEngineeringComponents}></CardContainer>

            <CardContainer title={'Electronics'} Cards={electronicsComponents}></CardContainer>


            <div style={myStyle}>
                <object data={"./PDF's/Scott Imandt - Master Fall 2024.pdf"} type="application/pdf" width="100%" height="900px">
                    <p>Alternative text<a href="/Projects">to the Projects</a></p>
                </object>
            </div>


        </>
    )
}

export default SkillsBody