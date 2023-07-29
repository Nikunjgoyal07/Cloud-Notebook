import React from 'react'
import { Link } from 'react-router-dom';

export default function LandingPageContent() {
    return (
        <>
            <main>
                <div className="container py-4 my-4">
                    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 "><strong>Cloud NoteBook</strong></h1>
                            <p className="col-md-8 fs-5">Using a series of utilities, you can create this jumbotron, just like the one in
                                previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your
                                liking.</p>
                            <Link to="/Newnote">
                                <button className="btn btn-primary btn-lg" type="button">Write a Note</button>
                            </Link>
                        </div>
                    </div>

                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                                <h2>Get Your Notes Saved In The Cloud</h2>
                                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then,
                                    mix and match with additional component themes and more.</p>
                                    <Link to="/notes">
                                <button className="btn btn-primary btn-md" type="button">My Notes</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                                <h2>Add borders</h2>
                                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure
                                    to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's
                                    content for equal-height.</p>
                                <button className="btn btn-outline-secondary" type="button">Example button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
