import React, { useState } from 'react';
import data from "./data";
import './style.css';
import photo from '../../icons/photo.jpeg';

const Resume = () => {
    const [mainInfo, setMainInfo] = useState(data.main);
    const [categoryList, setCategoryList] = useState(data.category_list);
    const [workExperience, setWorkExperience] = useState(data.work_experience);
    const [education, setEducation] = useState(data.education);
    const [languages, setLanguages] = useState(data.languages);

    return (
        <section className="section">
            <article className="article">
                <div className="article__item article__item--align-center">
                    <img className="main_img" src={photo} alt="main"/>
                </div>
                <div className="article__item">
                    <div className="current__location">
                        <p className="current_city">{mainInfo.location}</p>
                        <p>
                            <a className="current_contact" href={`tel:${mainInfo.telephone}`}>{mainInfo.telephone}</a>
                            <a className="current_contact" href={`mailto:${mainInfo.telephone}`}>{mainInfo.mail}</a>
                        </p>
                    </div>
                    <h1 className="main_title">{mainInfo.name}, {mainInfo.position}</h1>
                    <p className="main_decription">
                        {mainInfo.description}
                    </p>
                </div>
            </article>
            <article className="article">
                <div className="article__item">
                    <h3 className="category_name">{categoryList[0]}</h3>
                    <div className="languages">
                        <ul>
                            {Object.keys(languages).map((property, index) =>(
                                <li className="languages_item">
                                    <strong>{property}</strong>
                                    <i>{languages[property]}</i>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="article__item">
                    <ul className="employment__list">
                        {workExperience.map(company => (
                            <li className="company" key={company.id}>
                                <h2 className="company_title">{company.position} at {company.company_name}, {company.company_location}</h2>
                                <span className="article_date">{company.cooperation_time.start} — {company.cooperation_time.end}</span>
                                
                                {company.description.map(project => (
                                    <div className="project">
                                        <h4 className="project_title">{project.title}</h4>
                                        <ul>
                                            {project.responsibilities.map((item, index) => (
                                                <li className="project_text" key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                <p className="company_technology">{company.technology}</p>
                                {/* <ul className="responsibilities__list">
                                    {company.responsibilities.map((point, index) => (
                                        <li className="responsibilities__item" key={index}>
                                            {point}
                                        </li>
                                    ))}
                                </ul> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
            <article className="article">
                <div className="article__item">
                    <h3 className="category_name">{categoryList[1]}</h3>
                </div>
                <div className="article__item">
                    <ul className="education__list">
                        {education.map((university, index) => (
                            <li className="education__item" key={index}>
                                <h2 className="article_title">
                                    {university.degree}
                                    <span className="article_date">{university.cooperation_time.start} — {university.cooperation_time.end}</span>
                                </h2>
                                <p className="article_description">{university.university_name}, {university.university_city}</p>
                                {university.description &&
                                    <p>{university.description}</p>
                                }
                            </li>
                        ))}
                    </ul>  
                </div>
            </article>
        </section>
    )
};

export default Resume;