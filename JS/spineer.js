const loadingSteps = [
  {
    progress: 15,
    message: "Loading workforce information...",
    status: "Preparing workforce data...",
    icon: "iconWorkforce",
  },

  {
    progress: 35,
    message: "Loading project requirements...",
    status: "Preparing project information...",
    icon: "iconProjects",
  },

  {
    progress: 60,
    message: "Analysing candidate skills...",
    status: "Running skill analysis...",
    icon: "iconAI",
  },

  {
    progress: 80,
    message: "Generating project recommendations...",
    status: "Calculating candidate-project compatibility...",
    icon: "iconAI",
  },

  {
    progress: 95,
    message: "Preparing analytics dashboard...",
    status: "Preparing workforce analytics...",
    icon: "iconAnalytics",
  },

  {
    progress: 100,
    message: "RPPS is ready.",
    status: "Loading completed...",
    icon: "iconAnalytics",
  },
];

let currentStep = 0;

const progressBar = document.getElementById("progressBar");

const progressValue = document.getElementById("progressValue");

const loadingMessage = document.getElementById("loadingMessage");

const statusText = document.getElementById("statusText");

function updateLoading() {
  if (currentStep >= loadingSteps.length) {
    return;
  }

  const step = loadingSteps[currentStep];

  /*
        Update progress
        */

  progressBar.style.width = step.progress + "%";

  progressBar.setAttribute("aria-valuenow", step.progress);

  progressValue.textContent = step.progress + "%";

  /*
        Update messages
        */

  loadingMessage.textContent = step.message;

  statusText.textContent = step.status;

  /*
        Update icons
        */

  document.querySelectorAll(".loading-icon").forEach((icon) => {
    icon.classList.remove("active");
  });

  const activeIcon = document.getElementById(step.icon);

  if (activeIcon) {
    activeIcon.classList.add("active");
  }

  currentStep++;

  /*
        Redirect after completion
        */

  if (step.progress === 100) {
    setTimeout(
      () => {
        /*
                    Change this to your
                    actual RPPS homepage.

                    Example:

                    window.location.href =
                    "index.html";

                    */

        window.location.href = "index.html";
      },

      1200,
    );
  }
}

/*
    Start loading
    */

updateLoading();

/*
    Continue loading
    */

const loadingInterval = setInterval(
  () => {
    if (currentStep >= loadingSteps.length) {
      clearInterval(loadingInterval);

      return;
    }

    updateLoading();
  },

  900,
);
