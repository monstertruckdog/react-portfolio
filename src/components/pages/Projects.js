import React from 'react';

const Projects = () => {
    return (
        <section class="section-column" id="projects">
            <div class="section-lr">
                <h3 class="section-title">
                    Projects
                </h3>
            </div>
            <div class="section-lr">
                <div class="section-content">

                    <a href="https://naomi969.github.io/kayak-launch/" target="_blank" rel="noopener noreferrer" class="proj-tiles" id="tile-head" title="Bryan outside">
                        <div> 
                            <div class="tile-label">
                                <h4>Group Project</h4>
                                <p>
                                    Adventure Finder
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="https://monstertruckdog.github.io/password-generator/" target="_blank" rel="noopener noreferrer" class="proj-tiles" id="tile-b" title="Bryan over-the-shoulder look">
                        <div>
                            <div class="tile-label">
                                <h4>Password Generator</h4>
                                <p>
                                    Generate random passowrds

                                </p>
                                <p>
                                    with user defined parameters
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="https://monstertruckdog.github.io/workday-scheduler/" target="_blank" rel="noopener noreferrer" class="proj-tiles" id="tile-c" title="Head of Bryan">
                        <div>
                            <div class="tile-label">
                                <h4>Workday Scheduler</h4>
                                <p>
                                    Start your day with a plan
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="https://monstertruckdog.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" class="proj-tiles" id="tile-d" title="Bryan learns SQL">
                        <div>
                            <div class="tile-label">
                                <h4>Weather Dashboard</h4>
                                <p>
                                    Weather forecast dashboard
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="https://note-taker-civils.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="proj-tiles" id="tile-e" title="Bryan and his machine">
                        <div>
                            <div class="tile-label">
                                <h4>Note Taker</h4>
                                <p>
                                    Simple, easy note taking application
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;