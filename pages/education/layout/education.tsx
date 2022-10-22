import Card from "@/components/layouts/core/card";
import { NextPage } from "next";

const EducationPage: NextPage = () => {

    return (
        <div className="lg:p-12 p-3">
            <span className="text-4xl font-bold font-oswald">EDUCATION</span>

            <div className="p-6 flex flex-col gap-4">
                <Card className="border-stone-300 pt-3">
                    <Card.Header className="flex flex-col justify-center items-center">
                        <span className="font-bold font-oswald text-2xl">Marcelo H. Del Pilar National High School</span>
                        <span className="italic font-serrat">Junior High School (2016 - 2020)</span>
                    </Card.Header>

                    <Card.Body className="p-6">
                        <span className="text-sm italic">
                            Marcelo H. del Pilar National High School is one of the largest secondary schools in Central Luzon in terms of population. It has an average population of almost 10,000 students from Junior and Senior High School and 350 teachers. MHPNHS is one of the oldest secondary schools in the Philippines established in 1905. Its Junior High School Department offers the five curricular endorsed by the Department of Education: Special Program in Science and Technology Engineering, Special Program in Journalism, Special Program in Foreign Language, Special Program in the Arts, Special Program in Sports and Basic Education Program.The Senior High School Department is established in 2016 and offers Academic, Technical, Vocational and Livelihood, Arts and Design and Sports tracks. Under these tracks are the various strands, namely: Humanities and Social Sciences (HUMSS), Science, Technology, Engineering and Mathematics (STEM), Accountancy, Business and Management (ABM), Arts and Design (AAD), Sports, and various TVL strands.
                        </span>
                    </Card.Body>

                    <Card.Footer>

                    </Card.Footer>
                </Card>

                <Card className="border-stone-300 pt-3">
                    <Card.Header className="flex flex-col justify-center items-center">
                        <span className="font-bold font-oswald text-2xl">STI College - Malolos</span>
                        <span className="italic font-serrat">Senior High School (2020 - 2022)</span>
                    </Card.Header>

                    <Card.Body className="p-6">
                        <span className="text-sm italic">
                            STI College (formerly known as Systems Technology Institute) is a for-profit college network in the Philippines. They primarily cater to computer science and information technology education, but also offer other courses, such as business management and accountancy.
                        </span>
                    </Card.Body>

                    <Card.Footer>

                    </Card.Footer>
                </Card>

            </div>
        </div>
    )

}


export default EducationPage;