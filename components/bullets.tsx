'use client'
import { useState } from 'react'
import styles from './bullets.module.css'

export default function FLBullets() {

    return (
        <>
            <div className={styles.bullet}>
                <div />

                <div />
                <div />
                <div />

                <div>1</div>

                <div>What is software licensing?</div>

                <div />

                <BCont
                    content='Software Like a Book'
                    bullets={[
                        'The author owns the creative rights and decides how it can be used.',
                        'A software license is like a contract with the author:',
                        '- Who can read it: Can individuals, businesses, or specific groups use it?',
                        '- How it can be used: Is it for personal, commercial, or educational purposes?',
                        '- Limitations: Can you copy, modify, or distribute it?',
                        '- Responsibilities: Are there any warranties or support included?'
                ]}/>
                <div />
                <div />
                <div />

                <BCont
                    content='Key Points to Remember'
                    bullets={[
                        'Copyright protection: Software, like books, is protected by copyright law. The license grants you specific permission to use it within the defined boundaries.',
                        'Variety of licenses: Different types of licenses exist, from freeware with limited options to commercial licenses with paid support.',
                        'Understanding is crucial: Reading and understanding the license terms is essential to avoid misuse or legal issues.'
                ]}/>
                <div />
                <div />
                <div />

                <BCont
                    content='Understanding them can help us:'
                    bullets={[
                        'Make informed decisions: Choose software that aligns with your needs and complies with the terms.',
                        'Protect yourself: Avoid violating license agreements and potential legal consequences.',
                        'Respect intellectual property: Acknowledge the developers rights and contribution.'
                ]}/>
                <div />
                <div />
                <div />
            </div>
            <div className={styles.bullet}>
                <div />

                <div />
                <div />
                <div />

                <div>2</div>

                <div>Why are licenses important?</div>

                <div />

                <div />
                <div />
                <BCont
                    content='Legal Compliance'
                    bullets={[
                        'Software licenses ensure that users adhere to copyright laws and avoid unauthorized use, sharing, or distribution of software.'
                ]}/>
                <div />

                
                <BCont
                    content='Protecting Developers'
                    bullets={[
                        'Licenses help software developers protect their intellectual property rights, preventing unauthorized access, modification, or reverse engineering.'
                ]}/>
                <div />
                
                <BCont
                    content='Protecting Users'
                    bullets={[
                        'Licenses also protect users by outlining the terms and conditions of use, ensuring that they are aware of any limitations or restrictions.'
                ]}/>
                <div />

                <div />
                
                <BCont
                    content='Managing Software Assets'
                    bullets={[
                        'Software licenses help businesses manage their software assets by tracking license renewals and identifying underutilized licenses, allowing them to optimize their SaaS (Software-as-a-Software) spending.'
                ]}/>
                
                <BCont
                    content='Future Updates and Upgrades'
                    bullets={[
                        'Licenses may specify whether users will receive future updates, bug fixes, or newer software versions, ensuring that users have access to the latest features and improvements.'
                ]}/>
                <div />
            </div>
            <div className={styles.bullet}>
                <div />

                <div />
                <div />
                <div />

                <div>3</div>

                <div>Categories of software licenses</div>

                <div />

                <div />
                <BCont
                    content='Proprietary Software License'
                    bullets={[
                        'Seeks to maintain the licenses source code, hence reverse engineering is banned under its rules.',
                        'Users will only be given operational code, which will restrict them from reusing and updating their source code.'
                ]}/>
                <div />
                <div />

                <div />
                <BCont
                    content='Free and Open-source Software'
                    bullets={[
                        'Offers consumers with the actual source code. It allows users to reuse and customize its software functions. It also allows end users to thoroughly scrutinize the software code.',
                        'The essence of an open-source license is to promote a culture of sharing and innovation. This enables, for example, a software developer to contribute to and improve the software, resulting in a more polished product.'

                ]}/>
                <div />
                <div />

                <div />
                <div />
                <div />
                <div />
            </div>
            <div className={styles.bullet}>
                <div />

                <div />
                <div />
                <div />

                <div>4</div>

                <div>Difference between Audacity and FL Studio</div>

                <div />

                <BCont
                    content='Purpose and Focus'
                    bullets={[
                        'Audacity is primarily designed for recording, editing, and manipulating audio files.',
                        'FL Studio, on the other hand, is more comprehensive and is designed for music production, including recording, arranging, composing, mixing, and mastering music tracks.'
                ]}/>
                
                <div />
                <div />

                <BCont
                    content='User Interface'
                    bullets={[
                        'Audacity has a relatively simple and straightforward user interface, making it easy to use for beginners.',
                        'FL Studio has a more complex and feature-rich interface, with multiple panels, windows, and tools for various aspects of music production. '
                ]}/>

                <div />
                <div />

                <BCont
                    content='Features'
                    bullets={[
                        'Audacity offers essential audio editing features such as cutting, copying, and pasting audio, as well as effects like equalization, noise reduction, and compression.',
                        'FL Studio provides a comprehensive set of features for music production, including a wide range of virtual instruments, synthesizers, audio effects, MIDI support, and automation. It offers advanced features like pattern-based sequencing, audio recording, time-stretching, and pitch-shifting.'
                ]}/>

                
                


                <div />
                <BCont
                    content='Target Users'
                    bullets={[
                        'Audacity is suitable for individuals or small teams who need basic audio editing capabilities without the need for advanced music production tools.',
                        'FL Studio is geared towards music producers, composers, and artists who require a comprehensive suite of tools for professional music production and sound design.'
                ]}/>
                <BCont
                    content='Cost'
                    bullets={[
                        'Audacity is open-source software and is available for free, making it accessible to everyone.',
                        'FL Studio offers different editions with varying prices, ranging from the affordable "Fruity Edition" to the more feature-rich "Producer" and "Signature" editions.'
                ]}/>
                <div />
 
                <div />

                <div />
                <div />
                <div />
                <div />
            </div>
        </>
    )
}

function BCont({ content, bullets }: { content: string, bullets: string[] }) {

    const [modal, setModal] = useState(false)

    function chkTab(cont: string, idx: number){
        if (cont.startsWith('-')) {
            return <h5 key={idx}>{cont}</h5>
        } else {
            return <h4 key={idx}>• {cont}</h4>
        }
    }

    return (
        <div onClick={() => setModal(!modal)} className={modal ? styles.clickable_active : styles.clickable}>
            <div className={modal ? styles.modal : styles.hidden}>
                <h3>{content}</h3>
                {bullets && bullets.map((cont, idx) => chkTab(cont, idx))}
            </div>
        </div>
    )
}