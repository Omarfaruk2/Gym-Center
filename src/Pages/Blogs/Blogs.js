import React from 'react'
import { Card } from 'react-bootstrap'
import "./Blogs.css"

const Blogs = () => {
    return (
        <div>
            <Card className='p-3 border-1 m-3'>
                <Card.Body >
                    <h3>Authonization vs Authentication.</h3>
                    <br />
                    <p>Consider a person walking up to a locked door to provide care to a pet while the family is away on vacation. That person needs:
                        Authentication, in the form of a key. The lock on the door only grants access to someone with the correct key in much the same way that a system only grants access to users who have the correct credentials.
                        Authorization, in the form of permissions. Once inside, the person has the authorization to access the kitchen and open the cupboard that holds the pet food. The person may not have permission to go into the bedroom for a quick nap. </p>


                </Card.Body>
            </Card>
            <Card className='p-3 border-1 m-3'>
                <Card.Body >
                    <h3>Why We use Firebase !!</h3>
                    <br />
                    <p>Allow users to sign in to your app with their Facebook, Twitter, Google,
                        or GitHub account with less than 5 minutes of work.
                        Track each step of your onboarding flow to improve the experience.
                        Use Google Analytics for Firebase to log events at every step of your onboarding
                        flow, create funnels to see where users are dropping off, and use Remote Config
                        to make changes to your app to see how it affects conversions.</p>


                </Card.Body>
            </Card>
            <Card className='p-3 border-1 m-3'>
                <Card.Body >
                    <h3>Why We use Firebase !!</h3>
                    <br />
                    <ul>
                        <li>
                            Back4App. .</li>
                        <li> AWS Amplify. </li>
                        <li> Kuzzle.</li>
                        <li> Couchbase. </li>
                        <li> NativeScript. </li>
                        <li> RxDB.</li>
                        <li> Flutter.</li>
                    </ul>
                </Card.Body>
            </Card>

            <Card className='p-3 border-1 m-3'>
                <Card.Body >
                    <h3>Firebase work without include.... Authentication  !!</h3>
                    <br />
                    <p>2

                        Firebase Authentication fully manage user registration and/or login process of your application (even password reset process). You can view all of users data from Firebase Console.

                        This user data only have limited information attached to it, like email and password, and some additional information if that user account is connected with Google Authentication (like display photo, gender, etc).</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Blogs