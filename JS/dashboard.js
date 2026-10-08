const allItems = [
  {
    project: "Project 123",
    skills: "HTML, CSS, Bootstrap",
    priority: "High",
    assignedPerson: "Akansha Rana",
  },

  {
    project: "Project 124",
    skills: "JavaScript, DOM, Events",
    priority: "High",
    assignedPerson: "Rahul Sharma",
  },

  {
    project: "Project 125",
    skills: "Python, Django, REST API",
    priority: "Medium",
    assignedPerson: "Priya Singh",
  },

  {
    project: "Project 126",
    skills: "React, JavaScript, CSS",
    priority: "Low",
    assignedPerson: "Amit Kumar",
  },

  {
    project: "Project 127",
    skills: "Python, Flask, SQL",
    priority: "High",
    assignedPerson: "Neha Verma",
  },

  {
    project: "Project 128",
    skills: "Java, Spring Boot, MySQL",
    priority: "Medium",
    assignedPerson: "Rohit Gupta",
  },

  {
    project: "Project 129",
    skills: "Django, PostgreSQL, REST API",
    priority: "High",
    assignedPerson: "Sneha Sharma",
  },

  {
    project: "Project 130",
    skills: "AWS, Docker, Linux",
    priority: "Medium",
    assignedPerson: "Vikas Singh",
  },

  {
    project: "Project 131",
    skills: "Python, Machine Learning, SQL",
    priority: "High",
    assignedPerson: "Anjali Patel",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const projectList = document.getElementById("projectList");

  const projectSearch = document.getElementById("projectSearch");

  const headerProjectName = document.getElementById("headerProjectName");

  const headerAssignedPerson = document.getElementById("headerAssignedPerson");

  const detailTitle = document.getElementById("detailTitle");

  const detailPerson = document.getElementById("detailPerson");

  const detailSkills = document.getElementById("detailSkills");

  const detailPriority = document.getElementById("detailPriority");

  const detailPriorityText = document.getElementById("detailPriorityText");

  /* ==========================================
               DISPLAY PROJECT LIST
               ========================================== */

  function renderProjects(projects) {
    projectList.innerHTML = "";

    if (projects.length === 0) {
      projectList.innerHTML = `
                <div class="text-center p-4 text-muted">
                    <i class="bi bi-search fs-3"></i>
                    <p class="mt-2">No projects found</p>
                </div>
            `;

      return;
    }

    projects.forEach(function (item, index) {
      const projectDiv = document.createElement("div");

      projectDiv.className = "project-item";

      /* First project active */

      if (index === 0) {
        projectDiv.classList.add("active");
      }

      projectDiv.innerHTML = `

                <div class="project-icon">

                    <i class="bi bi-kanban-fill"></i>

                </div>


                <div class="project-item-content">

                    <div class="project-item-top">

                        <span class="project-item-name">
                            ${item.project}
                        </span>

                        <span class="project-date">
                            15/10/26
                        </span>

                    </div>


                    <div class="project-preview">

                        ${item.skills}

                    </div>

                </div>

            `;

      /* Click project */

      projectDiv.addEventListener("click", function () {
        document.querySelectorAll(".project-item").forEach(function (element) {
          element.classList.remove("active");
        });

        projectDiv.classList.add("active");

        showProject(item);
      });

      projectList.appendChild(projectDiv);
    });
  }

  /* ==========================================
               SHOW SELECTED PROJECT
               ========================================== */

  function showProject(item) {
    headerProjectName.textContent = item.project;

    headerAssignedPerson.textContent = "Assigned to " + item.assignedPerson;

    detailTitle.textContent = item.project;

    detailPerson.textContent = item.assignedPerson;

    detailPriorityText.textContent = item.priority;

    detailPriority.textContent = item.priority.toUpperCase();

    /* Priority color */

    detailPriority.className = "priority-badge";

    if (item.priority === "High") {
      detailPriority.classList.add("priority-high");
    } else if (item.priority === "Medium") {
      detailPriority.classList.add("priority-medium");
    } else {
      detailPriority.classList.add("priority-low");
    }

    /* Skills */

    detailSkills.innerHTML = "";

    item.skills.split(",").forEach(function (skill) {
      const badge = document.createElement("span");

      badge.className = "skill-badge";

      badge.textContent = skill.trim();

      detailSkills.appendChild(badge);
    });
  }

  /* ==========================================
               SEARCH PROJECTS
               ========================================== */

  projectSearch.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    const filteredProjects = allItems.filter(function (item) {
      return (
        item.project.toLowerCase().includes(searchText) ||
        item.skills.toLowerCase().includes(searchText) ||
        item.assignedPerson.toLowerCase().includes(searchText)
      );
    });

    renderProjects(filteredProjects);
  });

  /* ==========================================
               INITIAL LOAD
               ========================================== */

  renderProjects(allItems);

  /* ==========================================
               SHOW FIRST PROJECT
               ========================================== */

  showProject(allItems[0]);
});

const button = document.querySelector("#upload_btn");
const spanbox = document.getElementById("demo");

button.addEventListener("click", () => {
  spanbox.innerHTML = `
                    <div class="container">
                        <div id="carouselExampleIndicators"
                            class="carousel slide"
                            data-bs-ride="carousel">
                        <!-- Carousel Items -->
                            <div class="carousel-inner">

                            <!-- Slide 1 -->
                                <div class="carousel-item active">

                                    <div class="row g-4">

                                    <!-- Card 1 -->
                                        <div class="col-md-4">
                                            <div class="card h-100">

                                                <img src="https://via.placeholder.com/300x180"
                                                    class="card-img-top"
                                                    alt="Image 1">

                                                    <div class="card-body">

                                                        <h5 class="card-title">
                                                            Card Title 1
                                                        </h5>

                                                        <p class="card-text">
                                                            Some quick example text to build on
                                                            the card title and make up the bulk
                                                            of the card's content.
                                                        </p>

                                                        <a href="#" class="btn btn-primary">
                                                            Go somewhere
                                                        </a>

                                                    </div>
                                            </div>
                                        </div>


                                    <!-- Card 2 -->
                                        <div class="col-md-4">
                                            <div class="card h-100">

                                                <img src="https://via.placeholder.com/300x180"
                                                    class="card-img-top"
                                                    alt="Image 2">

                                                    <div class="card-body">

                                                        <h5 class="card-title">
                                                            Card Title 2
                                                        </h5>

                                                        <p class="card-text">
                                                            Some quick example text to build on
                                                            the card title and make up the bulk
                                                            of the card's content.
                                                        </p>

                                                        <a href="#" class="btn btn-primary">
                                                            Go somewhere
                                                        </a>

                                                    </div>
                                            </div>
                                        </div>


                                    <!-- Card 3 -->
                                        <div class="col-md-4">
                                            <div class="card h-100">

                                                <img src="https://via.placeholder.com/300x180"
                                                    class="card-img-top"
                                                    alt="Image 3">

                                                    <div class="card-body">

                                                        <h5 class="card-title">
                                                            Card Title 3
                                                        </h5>

                                                        <p class="card-text">
                                                            Some quick example text to build on
                                                            the card title and make up the bulk
                                                            of the card's content.
                                                        </p>

                                                        <a href="#" class="btn btn-primary">
                                                            Go somewhere
                                                        </a>

                                                    </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            <!-- Slide 2 -->
                                <div class="carousel-item">

                                    <div class="row g-4">

                                    <!-- Card 4 -->
                                        <div class="col-md-4">
                                            <div class="card h-100">

                                                <img src="https://via.placeholder.com/300x180"
                                                    class="card-img-top"
                                                    alt="Image 4">

                                                    <div class="card-body">

                                                        <h5 class="card-title">
                                                            Card Title 4
                                                        </h5>

                                                        <p class="card-text">
                                                            Another carousel card.
                                                        </p>

                                                        <a href="#" class="btn btn-primary">
                                                            Go somewhere
                                                        </a>

                                                    </div>
                                            </div>
                                        </div>


                                    <!-- Card 5 -->
                                        <div class="col-md-4">
                                            <div class="card h-100">

                                                <img src="https://via.placeholder.com/300x180"
                                                    class="card-img-top"
                                                    alt="Image 5">

                                                    <div class="card-body">

                                                        <h5 class="card-title">
                                                            Card Title 5
                                                        </h5>

                                                        <p class="card-text">
                                                            Another carousel card.
                                                        </p>

                                                        <a href="#" class="btn btn-primary">
                                                            Go somewhere
                                                        </a>

                                                    </div>
                                            </div>
                                        </div>


                                    <!-- Card 6 -->
                                        <div class="col-md-4">
                                            <div class="card h-100">

                                                <img src="https://via.placeholder.com/300x180"
                                                    class="card-img-top"
                                                    alt="Image 6">

                                                    <div class="card-body">

                                                        <h5 class="card-title">
                                                            Card Title 6
                                                        </h5>

                                                        <p class="card-text">
                                                            Another carousel card.
                                                        </p>

                                                        <a href="#" class="btn btn-primary">
                                                            Go somewhere
                                                        </a>

                                                    </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>


                        <!-- Previous Button -->
                            <button class="carousel-control-prev custom-carousel-btn"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">

                                <span class="carousel-control-prev-icon"></span>

                                <span class="visually-hidden">
                                    Previous
                                </span>

                            </button>


                        <!-- Next Button -->
                            <button class="carousel-control-next custom-carousel-btn"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">

                                <span class="carousel-control-next-icon"></span>

                                <span class="visually-hidden">
                                    Next
                                </span>

                            </button>

                        </div>

                    </div>
    `;
});
