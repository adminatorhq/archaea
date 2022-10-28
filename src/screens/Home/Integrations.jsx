import React from "react";
import Link from "@docusaurus/Link";

export function Integrations() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 p-8 mx-auto lg:pb-16">
        <h2 className="m-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:m-8 lg:text-3xl dark:text-white">
          Supported Databases
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <div className="text-center">
            <svg
              width="100px"
              height="100px"
              viewBox="-4 0 264 264"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351" />
              <path
                d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002"
                fill="#336791"
              />
              <path
                d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225"
                fill="#FFF"
              />
              <path
                d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z"
                fill="#FFF"
              />
            </svg>
            <h3 className="mt-3">PostgreSQL</h3>
          </div>

          <div className="text-center">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 256 252"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872-2.61 1.043-6.786 1.044-7.134 4.35 1.392 1.392 1.566 3.654 2.784 5.567 2.09 3.479 5.741 8.177 9.047 10.614 3.653 2.783 7.308 5.566 11.134 8.002 6.786 4.176 14.442 6.611 21.053 10.787 3.829 2.434 7.654 5.568 11.482 8.177 1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568-1.738-1.74-3.48-3.306-5.22-5.046-5.045-6.784-11.308-12.7-18.093-17.571-5.567-3.828-17.747-9.047-20.008-15.485 0 0-.175-.173-.348-.347 3.827-.348 8.35-1.74 12.005-2.784 5.915-1.567 11.308-1.218 17.398-2.784 2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265-8.873-7.657-18.617-15.137-28.707-21.4-5.394-3.48-12.354-5.742-18.095-8.699-2.086-1.045-5.567-1.566-6.784-3.306-3.133-3.827-4.873-8.872-7.134-13.396-5.044-9.57-9.917-20.182-14.267-30.272-3.13-6.786-5.044-13.572-8.872-19.834-17.92-29.577-37.406-47.497-67.33-65.07-6.438-3.653-14.093-5.219-22.27-7.132-4.348-.175-8.699-.522-13.048-.697-2.784-1.218-5.568-4.523-8.004-6.089C34.006 4.573 8.429-8.996 1.122 8.924c-4.698 11.308 6.96 22.442 10.96 28.185 2.96 4.001 6.786 8.524 8.874 13.048 1.218 2.956 1.565 6.09 2.783 9.221 2.785 7.653 5.393 16.18 9.048 23.314 1.914 3.653 4.001 7.48 6.437 10.786 1.392 1.913 3.827 2.784 4.35 5.915-2.435 3.48-2.61 8.7-4.003 13.049-6.263 19.66-3.826 44.017 5.046 58.457 2.783 4.348 9.395 13.92 18.268 10.265 7.83-3.131 6.09-13.048 8.35-21.747.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44 5.394 8.524 14.788 17.398 22.617 23.314 4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48-3.131-3.13-6.612-6.958-9.047-10.438-7.306-9.744-13.745-20.53-19.486-31.665-2.783-5.392-5.22-11.308-7.481-16.701-1.045-2.09-1.045-5.22-2.784-6.263-2.61 3.827-6.437 7.133-8.351 11.83-3.304 7.481-3.653 16.702-4.871 26.27-.696.176-.349 0-.697.35-5.566-1.394-7.48-7.134-9.569-12.006-5.22-12.352-6.09-32.186-1.565-46.452 1.218-3.654 6.438-15.136 4.35-18.616-1.044-3.306-4.525-5.22-6.438-7.829-2.261-3.306-4.698-7.48-6.263-11.135-4.176-9.743-6.264-20.53-10.787-30.273-2.088-4.524-5.74-9.22-8.699-13.396-3.305-4.697-6.959-8.004-9.569-13.571-.869-1.913-2.088-5.045-.696-7.133.348-1.392 1.043-1.913 2.436-2.261 2.262-1.915 8.7.521 10.96 1.565 6.438 2.608 11.831 5.046 17.225 8.699 2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913 9.222 2.957 17.572 7.307 25.054 12.005 22.792 14.44 41.58 34.97 54.282 59.501 2.088 4 2.957 7.656 4.871 11.83 3.655 8.526 8.178 17.225 11.83 25.576 3.654 8.176 7.133 16.528 12.353 23.314 2.61 3.652 13.048 5.567 17.746 7.481 3.48 1.565 8.874 2.958 12.005 4.871 5.915 3.652 11.83 7.83 17.398 11.83 2.784 2.088 11.482 6.438 12.005 9.917z"
                fill="#00546B"
              />
              <path
                d="M58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133 1.393 2.783 2.61 5.568 4.003 8.352.173-.175.347-.348.347-.348 2.437-1.741 3.654-4.524 3.654-8.7-1.044-1.217-1.218-2.435-2.088-3.653-1.043-1.741-3.306-2.61-4.698-4.003z"
                fill="#00546B"
              />
            </svg>
            <h3 className="mt-3">MySQL</h3>
          </div>
          <div className="text-center">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 88 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.5191 44.8197L36.2877 51.0913L19.5686 58.476L14.8847 59.7139C13.6972 60.8426 12.437 61.9891 11.095 63.1569C9.61977 64.4406 8.23243 65.6039 7.17754 66.4447C6.00287 67.381 4.25627 69.1141 3.36352 70.2253C2.03533 71.8786 0.996697 73.6416 0.550128 74.9974C-0.253294 77.4367 0.138148 79.9074 1.68765 82.1875C3.66698 85.1002 7.60729 88.0595 12.1899 90.0741C14.5275 91.1017 18.4721 92.4265 21.43 93.1734C26.3593 94.4182 35.8861 95.7706 41.1328 95.9716C42.1969 96.0123 43.6134 96.0085 43.6785 95.9655C43.7937 95.8894 44.6105 94.3428 45.5582 92.4069C48.7827 85.8199 51.1157 79.6448 52.3711 74.3709C53.1313 71.1775 53.7239 66.9193 54.1078 61.8703C54.2154 60.456 54.2543 55.739 54.1717 54.1358C54.0372 51.5269 53.8074 49.4005 53.4387 47.3137C53.3846 47.0079 53.3647 46.7389 53.3931 46.7146C53.4465 46.6687 53.6282 46.6104 55.9905 45.9238L55.5191 44.8197V44.8197ZM51.1241 47.3989C51.2989 47.3989 51.7636 51.8557 51.8845 54.6833C51.9102 55.2841 51.905 55.6687 51.8693 55.6687C51.7545 55.6687 49.4064 54.2899 47.742 53.2447C46.2884 52.3318 43.5301 50.4988 43.0915 50.1545C42.9531 50.0458 42.9678 50.0405 44.1561 49.6314C46.1779 48.9352 50.9713 47.3989 51.1241 47.3989ZM41.3274 50.6138C41.4517 50.6135 41.7901 50.8002 42.5897 51.3011C45.5893 53.1802 49.6512 55.441 51.3918 56.201C51.9315 56.4366 51.9931 56.3453 50.75 57.1895C48.1003 58.9888 44.8062 60.758 40.7617 62.5547C40.0568 62.8678 39.4597 63.1234 39.4356 63.1234C39.4116 63.1234 39.4903 62.7659 39.609 62.3266C40.5888 58.7023 41.1416 55.044 41.1571 52.1102C41.1648 50.6592 41.1652 50.6515 41.3031 50.6168C41.3096 50.6152 41.3192 50.6138 41.3274 50.6138V50.6138ZM39.3109 51.3833C39.3978 51.4705 39.3349 54.7219 39.2288 55.6079C38.9744 57.7334 38.5585 59.6991 37.8936 61.9342C37.7347 62.4683 37.5858 62.9287 37.5621 62.9561C37.5043 63.0231 35.5161 61.0859 34.8551 60.3192C33.7259 59.0092 32.8325 57.7079 32.1817 56.4261C31.8509 55.7745 31.3234 54.4879 31.3726 54.4521C31.596 54.2899 39.2564 51.3284 39.3109 51.3833ZM29.8124 55.1273C29.8302 55.1291 29.8441 55.134 29.8519 55.1425C29.8806 55.1741 29.9818 55.4103 30.077 55.6687C30.5401 56.9266 31.5815 58.7953 32.4858 59.9907C33.4732 61.2958 34.7604 62.6864 35.8376 63.6101C36.1834 63.9067 36.5061 64.1835 36.5523 64.2245C36.6445 64.3062 36.6755 64.2923 34.3046 65.1916C31.5569 66.2339 28.5643 67.2776 25.1285 68.3883C23.8191 68.8115 22.7109 69.1692 22.6679 69.1851C22.537 69.2337 22.5771 69.1531 22.9599 68.5555C24.6671 65.8902 27.2533 60.6764 28.6992 56.9887C28.95 56.3491 29.1886 55.7085 29.2314 55.5653C29.2943 55.3549 29.3563 55.2833 29.5538 55.1943C29.6631 55.145 29.7587 55.122 29.8124 55.1273ZM26.9016 56.3287C26.9403 56.3628 26.2033 57.9193 25.4782 59.3337C24.0719 62.0772 22.5214 64.777 20.4628 68.0719C20.1076 68.6405 19.7803 69.1602 19.7359 69.2247C19.6628 69.3308 19.6328 69.2958 19.4074 68.8475C18.9146 67.8674 18.5017 66.6307 18.2881 65.4806C18.0768 64.3423 18.1127 62.3717 18.3672 61.1495C18.5563 60.2415 18.5479 60.2615 18.9755 60.0424C20.8241 59.095 26.8414 56.2758 26.9016 56.3287ZM51.9727 57.3476V57.965C51.9696 61.2079 51.6234 65.6476 51.1211 68.8871C51.0329 69.4555 50.9566 69.9245 50.9507 69.9303C50.9449 69.936 50.5352 69.816 50.0413 69.6626C47.8592 68.9852 45.4935 67.9732 43.3592 66.8036C41.9458 66.0291 39.9015 64.7745 39.9588 64.7172C39.9744 64.7016 40.5765 64.3825 41.297 64.0085C44.1511 62.5271 46.8774 60.93 49.2475 59.3459C50.1368 58.7516 51.4674 57.7895 51.7628 57.5301L51.9727 57.3476ZM15.9249 61.6453C15.9841 61.6424 15.9691 61.7549 15.8762 62.2901C15.8116 62.6623 15.7387 63.3654 15.712 63.8503C15.5951 65.976 15.9398 67.5443 16.9955 69.69C17.289 70.2866 17.5186 70.7839 17.5065 70.7941C17.4008 70.8826 7.78786 73.6956 4.76564 74.523C3.86978 74.7682 3.08678 74.9843 3.02287 75.0035C2.918 75.0351 2.90865 75.0122 2.94682 74.7663C3.27785 72.6337 4.90463 69.8346 7.17754 67.4849C8.68864 65.9228 9.89857 64.9974 11.9557 63.823C13.4321 62.9801 15.7251 61.7151 15.8945 61.6513C15.9059 61.6471 15.9164 61.6457 15.9249 61.6453V61.6453ZM38.5992 65.7057C38.6084 65.6947 38.9645 65.8854 39.39 66.1315C42.495 67.9272 46.8278 69.6114 50.5219 70.4565L50.8565 70.5325L50.3972 70.788C48.4675 71.8588 42.1125 74.503 35.6216 76.9379C34.6741 77.2934 33.7495 77.6419 33.5686 77.7135C33.3877 77.7851 33.2401 77.8342 33.2401 77.8199C33.2401 77.8057 33.5078 77.2904 33.8363 76.6763C35.6584 73.2693 37.4773 69.129 38.4107 66.2562C38.5058 65.9633 38.5901 65.7166 38.5992 65.7057ZM36.2877 66.463C36.2977 66.473 36.1841 66.7782 36.0352 67.1382C34.7685 70.2014 33.1088 73.5431 30.9925 77.2968C30.4539 78.2521 29.9999 79.032 29.9827 79.0304C29.9654 79.0289 29.5274 78.7697 29.0094 78.4526C25.9268 76.5654 23.1995 74.2425 21.4087 71.9833L21.1532 71.6639L22.4823 71.299C27.2233 70.0002 31.2438 68.6113 35.2414 66.8888C35.8075 66.6449 36.2777 66.453 36.2877 66.463ZM50.6466 71.4754C50.6534 71.4768 50.6557 71.4816 50.6557 71.4875C50.6557 71.8107 49.9224 74.801 49.3114 76.9653C48.7989 78.7807 48.3686 80.2007 47.5716 82.7167C47.2197 83.828 46.9175 84.7349 46.8995 84.7302C46.8815 84.7255 46.797 84.7093 46.7109 84.6937C42.3923 83.9122 38.5242 82.8223 34.9008 81.3663C33.8871 80.959 32.4232 80.3106 32.3459 80.2349C32.3197 80.2092 33.1951 79.7969 34.2894 79.3194C40.9072 76.432 47.764 73.1438 50.1082 71.7339C50.3902 71.5643 50.5989 71.4656 50.6466 71.4754ZM17.5004 72.6099C17.5359 72.6435 15.6847 75.2934 13.0993 78.9118C12.2007 80.1695 11.1451 81.6518 10.7543 82.2058C10.3635 82.7597 9.77238 83.6365 9.43738 84.1554L8.82604 85.0982L8.17515 84.5508C7.41143 83.9095 6.07462 82.548 5.46823 81.7921C4.22035 80.2366 3.3748 78.5996 3.04111 77.0961C2.88706 76.402 2.88252 76.0483 3.02894 76.0042C3.24056 75.9404 7.12272 75.0265 10.7635 74.1823C12.7858 73.7134 15.1239 73.1645 15.9614 72.9627C16.7989 72.7609 17.4922 72.6021 17.5004 72.6099H17.5004ZM19.3618 73.3216L19.8302 73.8447C21.9242 76.1774 24.0539 77.9182 26.6522 79.4198C27.111 79.6849 27.4607 79.9154 27.4309 79.9338C27.3227 80.0006 18.4457 83.1569 14.3403 84.5873C12.025 85.394 10.1231 86.0517 10.1126 86.0502C10.1021 86.0487 9.97094 85.9629 9.82365 85.8586L9.556 85.667L9.97571 85.0617C11.3379 83.0886 13.0493 80.9188 16.7948 76.4117L19.3618 73.3216ZM30.962 81.6127C30.9723 81.5999 31.6213 81.83 32.4067 82.1237C34.2999 82.8316 35.7858 83.2933 37.7963 83.7965C40.2656 84.4145 43.8342 85.0326 45.9475 85.2108C46.2719 85.2381 46.4375 85.2751 46.3855 85.3081C46.2874 85.3702 44.1476 86.0849 42.5745 86.5794C40.0773 87.3644 32.4459 89.6189 26.2234 91.4093C25.0691 91.7415 24.0822 92.0221 24.0305 92.0328C23.8911 92.0618 23.4039 91.934 23.4039 91.8686C23.4039 91.8375 23.7528 91.396 24.1765 90.8892C26.268 88.3875 28.3457 85.5933 30.08 82.9509C30.5544 82.2282 30.9518 81.6255 30.962 81.6127ZM28.392 81.6857C28.4107 81.7044 27.3797 83.3553 25.5664 86.2114C24.8008 87.4174 23.9326 88.7902 23.6351 89.262C23.3375 89.7339 22.9015 90.451 22.6679 90.8588L22.2421 91.601L22.0261 91.5432C21.5051 91.4021 17.8296 90.1037 16.8586 89.7183C15.6553 89.2406 14.4012 88.6638 13.4765 88.1641C12.3209 87.5396 10.8554 86.6129 10.9703 86.5764C11.0034 86.5659 12.9918 86.0217 15.3865 85.3689C21.757 83.6324 25.2808 82.6349 27.5921 81.9138C28.0239 81.7791 28.3837 81.6774 28.392 81.6857ZM46.4858 85.9286C46.4995 85.9256 46.5059 85.9255 46.5071 85.9286C46.5674 86.0792 44.209 92.6113 43.347 94.682C43.1539 95.1458 43.0825 95.2582 42.982 95.2538C42.738 95.2431 39.3184 94.765 37.2488 94.4508C33.6257 93.9008 27.5571 92.8411 26.0257 92.4921L25.6698 92.413L27.8415 91.9233C32.4962 90.8746 34.7316 90.3121 36.9994 89.6179C39.8595 88.7423 42.6916 87.6507 45.5521 86.3209C46.0043 86.1107 46.3898 85.9494 46.4858 85.9286Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M35.6986 0.00055976C35.377 -0.0369892 30.2157 1.82256 26.8996 3.1698C22.4063 4.9953 18.9176 6.74441 16.7653 8.25518C15.9642 8.81751 14.9569 9.82887 14.8097 10.2169C14.7546 10.3622 14.7287 10.5319 14.7275 10.7066L16.6802 12.5498L21.3124 14.0279L32.3469 15.9988L44.96 18.1674L45.0877 17.0846C45.0496 17.0786 45.0135 17.0724 44.9752 17.0664L43.3146 16.8048L42.9769 16.2117C41.2627 13.1869 39.3683 9.44374 38.2687 6.91084C37.4171 4.9492 36.5994 2.68945 36.1458 1.05292C35.8763 0.0809629 35.8483 0.0180308 35.6986 0.00055976ZM35.4553 0.748767C35.4682 0.746457 35.4746 0.74637 35.4766 0.748767C35.4868 0.760959 35.5454 1.16666 35.6044 1.64905C35.8526 3.68061 36.3072 5.6509 37.0187 7.77158C37.5548 9.36961 37.5625 9.27575 36.9244 9.09767C35.4412 8.68375 28.796 7.54307 23.9889 6.87738C23.2143 6.77012 22.5696 6.67474 22.5594 6.66448C22.4984 6.60344 26.0262 4.75512 27.59 4.0275C29.5958 3.09429 35.0577 0.820285 35.4553 0.748767ZM21.4492 7.25453L22.0119 7.44614C25.0982 8.49669 32.834 9.97439 37.1099 10.3295C37.5923 10.3695 37.9979 10.4125 38.0102 10.4238C38.0225 10.435 37.6127 10.654 37.1008 10.9104C35.038 11.9437 32.7677 13.2031 31.1972 14.1861C30.736 14.4748 30.3131 14.7076 30.2574 14.7031C30.2018 14.6987 29.8976 14.6498 29.5792 14.5967L28.9982 14.5024L27.5383 13.0851C24.9754 10.6045 22.9744 8.68552 22.2005 7.96015L21.4492 7.25453ZM20.8774 7.71075L22.9213 10.2626C24.0465 11.6661 25.1741 13.0591 25.4245 13.3588C25.6748 13.6586 25.8685 13.9126 25.8564 13.9215C25.7984 13.9639 22.8941 13.3985 21.355 13.0455C19.7749 12.6832 19.1214 12.5098 18.1431 12.197L17.3463 11.9415L17.3493 11.7438C17.3594 10.7635 18.595 9.31769 20.6919 7.83849L20.8774 7.71075H20.8774ZM38.2839 11.1872C38.3452 11.1919 38.41 11.3165 38.5911 11.7134C39.0868 12.7994 40.63 15.7427 41.003 16.3121C41.1259 16.4996 41.3206 16.5122 39.2724 16.1813C34.3499 15.3862 32.7575 15.1201 32.7575 15.0894C32.7576 15.0707 32.9051 14.974 33.086 14.8735C34.6104 14.0258 36.1484 12.9588 37.5175 11.8046C37.8448 11.5286 38.1593 11.2657 38.217 11.2176C38.2407 11.1978 38.2635 11.1856 38.2839 11.1872Z"
                fill="url(#paint1_linear)"
              />
              <path
                d="M14.8977 10.0209C14.8977 10.0209 14.5783 10.5273 14.8795 11.2801C15.0658 11.7459 15.6254 12.3055 16.2421 12.8982C16.2421 12.8982 22.7016 19.1992 23.493 20.1126C27.072 24.2433 28.6264 28.3098 28.77 33.924C28.8621 37.5268 28.1673 40.6939 26.4798 44.3746C23.4551 50.9719 17.0821 58.2472 7.23926 66.3373L8.68397 65.8598C9.6126 65.1641 10.8737 64.4211 13.8484 62.7939C20.6992 59.0467 28.3924 55.5998 37.8428 52.0483C51.4395 46.9387 73.8051 40.9435 86.5311 38.9942L87.8571 38.7904L87.6534 38.4711C86.4897 36.6624 85.6955 35.5471 84.7396 34.3651C81.9483 30.9133 78.5692 28.0968 74.4289 25.7789C68.7395 22.5937 61.3601 20.1182 52.0314 18.2634C50.2678 17.9127 46.4056 17.2507 43.2627 16.7609C36.6053 15.7234 32.3114 15.0228 27.5686 14.1969C25.8682 13.9019 23.3292 13.4755 21.6438 13.1111C20.7656 12.9212 19.0965 12.5266 17.7993 12.08C16.7284 11.6584 15.2203 11.2508 14.8977 10.0209ZM18.6418 13.6555C18.6509 13.6473 18.8935 13.7224 19.1893 13.8228C19.7344 14.0079 20.4538 14.2245 21.291 14.4585C21.8775 14.6224 22.5223 14.7944 23.2071 14.9694C24.0811 15.1929 24.8038 15.3849 24.813 15.3953C24.9098 15.504 26.3776 20.1887 26.8782 21.9862C27.0693 22.6722 27.2143 23.2438 27.2006 23.2575C27.1869 23.2712 27.0241 23.0186 26.8417 22.6979C25.1435 19.7115 22.4543 16.6746 19.3444 14.2304C18.9568 13.9257 18.6418 13.667 18.6418 13.6555ZM25.7985 15.6325C25.8733 15.6273 26.1957 15.6813 26.5801 15.7663C29.0566 16.314 33.4784 17.1676 36.322 17.646C36.7958 17.7257 37.1858 17.8115 37.1858 17.8376C37.1858 17.8637 37.0088 17.9756 36.7935 18.0839C36.3164 18.3239 34.3858 19.4795 33.7398 19.9119C32.1273 20.9911 30.6775 22.1464 29.6216 23.1967C29.1973 23.6188 28.8422 23.9632 28.8308 23.9632C28.8194 23.9632 28.7452 23.7172 28.6666 23.4157C28.1387 21.3923 27.0473 18.4044 26.0692 16.3016C25.9118 15.9632 25.7833 15.6648 25.7833 15.6386C25.7833 15.6353 25.7877 15.6332 25.7985 15.6325V15.6325ZM38.3872 18.0262C38.4701 18.0538 38.6267 18.5426 38.9043 19.6412C39.4357 21.7448 39.6832 24.1073 39.6008 26.2929C39.5778 26.9012 39.5394 27.466 39.5156 27.5491L39.47 27.7011L38.7187 27.4578C37.1701 26.9628 34.6398 26.2178 32.4715 25.6177C31.2397 25.2768 30.2299 24.9725 30.2299 24.9425C30.2299 24.8525 32.0273 23.0555 32.8 22.3724C34.2759 21.0677 38.2465 17.9792 38.3872 18.0262ZM39.3879 18.1691C39.4327 18.1274 45.4036 19.1613 48.117 19.6807C50.1394 20.0679 53.0655 20.6807 53.2419 20.7544C53.327 20.7899 53.0242 20.955 52.0527 21.3931C48.2098 23.1261 45.3628 24.6728 42.5328 26.5667C41.7873 27.0655 41.1679 27.473 41.155 27.473C41.1421 27.473 41.131 27.0567 41.1306 26.5484C41.1287 23.7886 40.5777 21.0031 39.5673 18.6497C39.4586 18.3964 39.377 18.1792 39.3879 18.1691ZM54.8265 21.2228C54.8727 21.269 54.6769 22.4464 54.5071 23.1419C53.9788 25.3066 52.5789 28.5196 50.8513 31.5395C50.5468 32.0717 50.2746 32.5154 50.243 32.525C50.2114 32.5346 49.818 32.3277 49.3701 32.0657C47.6807 31.0776 45.7679 30.1429 43.6673 29.2766C43.0815 29.0351 42.5826 28.82 42.5571 28.7961C42.4613 28.7062 47.1294 25.6156 49.6043 24.1304C51.5838 22.9425 54.771 21.1672 54.8265 21.2228ZM55.9306 21.3961C56.065 21.3961 58.713 22.1181 60.0822 22.5276C63.4927 23.5476 67.427 24.9848 69.9792 26.1439L71.0407 26.6245L70.2925 26.7978C64.0477 28.2325 58.6952 29.888 53.54 31.9805C53.1116 32.1544 52.7388 32.2969 52.7127 32.2969C52.6865 32.2969 52.8232 31.9657 53.0138 31.5608C54.5634 28.2683 55.5643 24.8134 55.8241 21.8797C55.8478 21.6127 55.896 21.3961 55.9306 21.3961ZM29.6095 27.4457C29.6518 27.4039 31.6672 27.8761 32.7665 28.1848C34.4189 28.6486 37.9349 29.8252 37.9371 29.9154C37.9371 29.9329 37.5496 30.2707 37.0763 30.6666C35.1754 32.2569 33.3418 33.9198 31.1454 36.0409C30.4943 36.6698 29.941 37.1815 29.9136 37.1815C29.8863 37.1815 29.8741 37.0897 29.8893 36.9777C30.2201 34.536 30.149 31.4006 29.6885 28.2091C29.6302 27.8045 29.5948 27.4601 29.6095 27.4457ZM72.0505 27.4852C72.0807 27.5154 71.1154 29.0242 70.5145 29.8849C69.6378 31.1409 68.367 32.7896 65.4717 36.4302C63.9509 38.3426 62.2355 40.5067 61.6577 41.2388C61.0799 41.971 60.5949 42.571 60.581 42.571C60.5671 42.571 60.3807 42.3088 60.1674 41.9901C58.5353 39.5519 56.5986 37.4101 54.2882 35.4874C53.857 35.1286 53.3706 34.7351 53.2084 34.6145C53.0463 34.4939 52.9141 34.3823 52.9134 34.3651C52.9118 34.3253 55.3794 33.267 57.2627 32.5006C60.5415 31.1664 65.0228 29.5687 68.3764 28.5406C70.1448 27.9984 72.0236 27.4583 72.0505 27.4852ZM73.1637 27.7772C73.2166 27.7664 73.5686 27.9367 73.991 28.1787C77.5229 30.2019 80.9839 32.8 83.7055 35.4722C84.4797 36.2323 86.3737 38.2024 86.3455 38.2186C86.3383 38.2228 85.6842 38.2746 84.8917 38.3342C78.7712 38.7945 70.9463 40.0965 63.4126 41.908C62.901 42.031 62.4587 42.133 62.4302 42.133C62.4018 42.133 62.9618 41.5709 63.6742 40.886C68.0984 36.6327 70.1168 33.9471 72.4915 29.1489C72.8452 28.4343 73.1451 27.8178 73.1576 27.7802C73.1583 27.7779 73.1602 27.7779 73.1637 27.7772L73.1637 27.7772ZM40.8143 31.0924C41.0164 31.1378 42.9032 32.0157 44.3273 32.7287C45.6295 33.3808 47.6019 34.4309 47.7003 34.5232C47.7126 34.5348 47.0178 34.8976 46.1552 35.3292C43.4242 36.6955 41.085 37.9858 38.6427 39.4778C37.9462 39.9033 37.3625 40.2534 37.344 40.2534C37.2831 40.2534 37.3071 40.2007 37.6968 39.4869C38.9974 37.1049 40.0465 34.2609 40.6501 31.4817C40.704 31.2337 40.7688 31.0822 40.8143 31.0924ZM38.9134 31.4331C38.9528 31.4725 38.4632 33.2708 38.153 34.2312C37.5582 36.0733 36.5524 38.3888 35.586 40.1317C35.359 40.5411 35.0108 41.1402 34.8135 41.4639L34.4546 42.0509L33.6394 41.2632C32.6923 40.3449 31.9207 39.7747 30.9356 39.268C30.5483 39.0688 30.2335 38.8845 30.233 38.8574C30.2311 38.7376 32.711 36.4823 34.6249 34.8639C35.9949 33.7054 38.8784 31.398 38.9134 31.4331ZM50.465 36.1839L51.1737 36.6431C52.7994 37.6987 54.7244 39.1186 56.1921 40.3416C57.0146 41.027 58.6132 42.4584 58.9416 42.8052L59.1181 42.9907L57.941 43.3192C51.2837 45.1663 46.1404 46.8106 40.1391 49.016C39.4731 49.2607 38.898 49.4631 38.8586 49.4631C38.7759 49.4631 38.6936 49.5392 40.1908 48.1613C44.0293 44.6289 47.4202 40.7369 49.954 36.9503L50.465 36.1839ZM47.4296 36.9443C47.4644 36.979 45.4623 39.7831 44.2725 41.3666C42.8491 43.2611 40.314 46.428 38.5697 48.4898C37.8409 49.3512 37.2166 50.066 37.1828 50.0774C37.1457 50.09 37.1226 49.879 37.122 49.5452C37.1186 47.786 36.6735 45.9058 35.8871 44.3138C35.555 43.6414 35.4993 43.4786 35.5677 43.4166C35.8414 43.1684 40.0761 40.7539 42.7457 39.3227C44.5794 38.3397 47.3947 36.9094 47.4296 36.9443ZM29.0711 41.4426C29.1075 41.4426 29.4472 41.6133 29.8254 41.8228C30.7522 42.3362 31.5849 42.9012 32.3194 43.5139C32.3478 43.5375 31.9674 43.8483 31.4739 44.2043C30.0964 45.1982 27.9988 46.7812 26.7839 47.7476C25.5021 48.7672 25.4596 48.7985 25.6038 48.578C26.5637 47.1099 27.0464 46.2787 27.5504 45.2171C27.9984 44.2734 28.4449 43.1532 28.7639 42.1787C28.8964 41.7738 29.0347 41.4426 29.0711 41.4426ZM33.9618 45.281C34.028 45.2728 34.1222 45.396 34.5154 45.9836C35.3441 47.2218 35.9787 48.8731 36.1426 50.2173L36.176 50.5063L34.19 51.2758C30.6248 52.6593 27.3431 54.023 25.1263 55.0381C24.5061 55.3221 23.4111 55.8453 22.6961 56.203C21.9812 56.5607 21.3974 56.8419 21.3974 56.8265C21.3974 56.8111 21.8464 56.4735 22.395 56.0753C26.7458 52.9167 30.497 49.4587 33.3231 46.0018C33.6254 45.6321 33.8999 45.3115 33.9345 45.2901C33.9436 45.2845 33.9524 45.2821 33.9618 45.281V45.281ZM31.705 45.8406C31.7626 45.8982 30.0998 47.7787 28.9799 48.9217C26.1769 51.7824 23.3982 54.0253 19.9558 56.2091C19.5251 56.4823 19.1315 56.7294 19.0798 56.7596C18.9853 56.8149 19.1104 56.6728 20.6218 55.0259C21.5743 53.9882 22.3034 53.1267 23.1311 52.0514C23.6762 51.3432 23.7803 51.2439 24.5788 50.6675C26.7299 49.1149 31.6478 45.7834 31.705 45.8406Z"
                fill="url(#paint2_radial)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="18.2585"
                  y1="92.7052"
                  x2="55.9905"
                  y2="70.4099"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#909CA9" />
                  <stop offset="1" stop-color="#EDEDEE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="14.7275"
                  y1="9.08371"
                  x2="45.0877"
                  y2="9.08371"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#939FAB" />
                  <stop offset="1" stop-color="#DCDEE1" />
                </linearGradient>
                <radialGradient
                  id="paint2_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(43.3678 34.8348) rotate(-171.401) scale(39.1698 78.23)"
                >
                  <stop stop-color="#EE352C" />
                  <stop offset="1" stop-color="#A91D22" />
                </radialGradient>
              </defs>
            </svg>
            <h3 className="mt-3">SQL Server</h3>
          </div>
          <div className="text-center">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 256 170"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M250.392.004c-3.95.127-2.701 1.265-11.236 3.365-8.619 2.121-19.147 1.47-28.428 5.363-27.706 11.62-33.265 51.333-58.452 65.559-18.827 10.634-37.822 11.482-54.899 16.834-11.223 3.519-23.5 10.736-33.668 19.499-7.892 6.803-8.098 12.786-16.345 21.32-8.82 9.127-35.057.154-46.948 14.124 3.83 3.873 5.51 4.958 13.058 3.953-1.562 2.962-10.775 5.458-8.972 9.816 1.898 4.585 24.17 7.693 44.417-4.53 9.429-5.693 16.94-13.899 31.624-15.857 19.003-2.533 40.895 1.624 62.894 4.797-3.262 9.726-9.811 16.194-15.057 23.94-1.625 1.75 3.263 1.946 8.839.889 10.03-2.48 17.258-4.478 24.828-8.884 9.3-5.414 10.71-19.293 22.12-22.297 6.357 9.772 23.649 12.08 34.378 4.264-9.415-2.665-12.017-22.705-8.839-31.535 3.01-8.36 5.985-21.73 9.017-32.78 3.255-11.866 4.455-26.823 8.394-32.868 5.927-9.094 12.475-12.217 18.16-17.345 5.686-5.129 10.89-10.12 10.719-21.855-.055-3.78-2.01-5.886-5.604-5.772z"
                fill="#002B64"
              />
              <path
                d="M8.594 159c14.418 2.066 23.186 0 34.764-5.02 9.852-4.273 19.366-13.081 31-16.815 17.085-5.482 35.821.007 54.085 1.102 4.448.267 8.867.27 13.229-.205 6.803-4.182 6.663-19.823 13.285-21.256-.195 21.945-9.192 35.094-18.601 47.826 19.83-3.502 31.697-14.972 39.712-30.291 2.432-4.645 4.508-9.642 6.344-14.88 2.839 2.179 1.23 8.808 2.657 12.4 13.659-7.609 21.48-24.973 26.66-42.535 5.992-20.325 8.445-40.906 12.31-46.92 3.772-5.87 9.642-9.488 15-13.246 6.09-4.273 11.52-8.726 12.458-16.867-6.421-.594-7.906-2.08-8.856-5.316-3.215 1.812-6.171 2.2-9.511 2.3-2.898.088-6.082-.041-9.971.358-32.16 3.303-36.247 38.75-56.86 58.844a48.347 48.347 0 0 1-4.835 4.104c-7.22 5.38-16.076 9.224-24.22 12.337-13.183 5.037-25.716 5.395-38.084 9.743-9.08 3.191-18.306 7.82-25.763 12.924a76.37 76.37 0 0 0-5.238 3.903c-4.376 3.58-7.249 7.553-10.027 11.64-2.866 4.21-5.633 8.543-9.851 12.682-6.834 6.71-32.37 1.957-41.36 8.18-1.002.692-1.798 1.523-2.34 2.521 4.906 2.229 8.182.861 13.825 1.485.74 5.355-11.642 8.537-9.812 11.003zM203.435 120.426c.384 6.143 3.95 18.33 7.098 21.293-6.166 1.5-16.787-.978-19.512-5.327 1.4-6.28 8.686-12.02 12.414-15.966z"
                fill="#FFF"
              />
              <path
                d="M212.468 22.935c4.552 3.952 14.105.78 12.398-7.084-7.074-.586-11.172 1.815-12.398 7.084zM244.207 13.744c-1.21 2.54-3.529 5.815-3.529 12.28-.01 1.11-.843 1.871-.857.16.063-6.32 1.735-9.051 3.512-12.641.826-1.471 1.323-.864.874.201z"
                fill="#002B64"
              />
              <path
                d="M242.988 12.788c-1.429 2.423-4.868 6.844-5.437 13.285-.105 1.104-1.003 1.788-.867.081.62-6.288 3.369-10.224 5.455-13.645.947-1.391 1.392-.743.849.279zM241.876 11.52c-1.627 2.294-6.922 7.603-8.029 13.975-.199 1.09-1.151 1.698-.871.008 1.146-6.215 5.71-11.1 8.076-14.331 1.06-1.31 1.448-.625.824.348zM240.884 10.106c-1.933 2.042-8.245 8.812-10.235 14.964-.352 1.051-1.38 1.52-.864-.114 2.007-5.992 7.535-12.447 10.332-15.312 1.235-1.147 1.522-.415.767.462z"
                fill="#002B64"
              />
            </svg>
            <h3 className="mt-3">MariaDB</h3>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="100px"
              viewBox="0 0 6.554 6.555"
            >
              <defs>
                <linearGradient
                  x1="2.983"
                  y1=".53"
                  x2="2.983"
                  y2="4.744"
                  id="A"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#97d9f6" offset="0%" />
                  <stop stop-color="#0f80cc" offset="92.024%" />
                  <stop stop-color="#0f80cc" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M4.96.29H.847c-.276 0-.5.226-.5.5v4.536c0 .276.226.5.5.5h2.71c-.03-1.348.43-3.964 1.404-5.54z"
                fill="#0f80cc"
              />
              <path
                d="M4.81.437H.847c-.196 0-.355.16-.355.355v4.205c.898-.345 2.245-.642 3.177-.628A28.93 28.93 0 0 1 4.811.437z"
                fill="url(#A)"
              />
              <path
                d="M5.92.142c-.282-.25-.623-.15-.96.148l-.15.146c-.576.61-1.1 1.742-1.276 2.607a2.38 2.38 0 0 1 .148.426l.022.1.022.102s-.005-.02-.026-.08l-.014-.04a.461.461 0 0 0-.009-.022c-.038-.087-.14-.272-.187-.352a8.789 8.789 0 0 0-.103.321c.132.242.212.656.212.656s-.007-.027-.04-.12c-.03-.083-.176-.34-.21-.4-.06.22-.083.368-.062.404.04.07.08.2.115.324a7.52 7.52 0 0 1 .132.666l.005.062a6.11 6.11 0 0 0 .015.75c.026.313.075.582.137.726l.042-.023c-.09-.284-.128-.655-.112-1.084.025-.655.175-1.445.454-2.268C4.548 1.938 5.2.94 5.798.464c-.545.492-1.282 2.084-1.502 2.673-.247.66-.422 1.28-.528 1.873.182-.556.77-.796.77-.796s.29-.356.626-.865l-.645.172-.208.092s.53-.323.987-.47c.627-.987 1.31-2.39.622-3.002"
                fill="#003b57"
              />
            </svg>
            <h3 className="mt-3">SQLite</h3>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.82 32"
              width="100px"
              height="100px"
            >
              <path
                d="M19.42 9.17a15.39 15.39 0 0 1-3.51.4 15.46 15.46 0 0 1-3.51-.4 15.63 15.63 0 0 1 3.51-3.91 15.71 15.71 0 0 1 3.51 3.91zM30 .57A17.22 17.22 0 0 0 25.59 0a17.4 17.4 0 0 0-9.68 2.93A17.38 17.38 0 0 0 6.23 0a17.22 17.22 0 0 0-4.44.57A16.22 16.22 0 0 0 0 1.13a.07.07 0 0 0 0 .09 17.32 17.32 0 0 0 .83 1.57.07.07 0 0 0 .08 0 16.39 16.39 0 0 1 1.81-.54 15.65 15.65 0 0 1 11.59 1.88 17.52 17.52 0 0 0-3.78 4.48c-.2.32-.37.65-.55 1s-.22.45-.33.69-.31.72-.44 1.08a17.46 17.46 0 0 0 4.29 18.7c.26.25.53.49.81.73s.44.37.67.54.59.44.89.64a.07.07 0 0 0 .08 0c.3-.21.6-.42.89-.64s.45-.35.67-.54.55-.48.81-.73a17.45 17.45 0 0 0 5.38-12.61 17.39 17.39 0 0 0-1.09-6.09c-.14-.37-.29-.73-.45-1.09s-.22-.47-.33-.69-.35-.66-.55-1a17.61 17.61 0 0 0-3.78-4.48 15.65 15.65 0 0 1 11.6-1.84 16.13 16.13 0 0 1 1.81.54.07.07 0 0 0 .08 0q.44-.76.82-1.56a.07.07 0 0 0 0-.09A16.89 16.89 0 0 0 30 .57z"
                fill="#151f34"
              />
              <path
                d="M21.82 17.47a15.51 15.51 0 0 1-4.25 10.69 15.66 15.66 0 0 1-.72-4.68 15.5 15.5 0 0 1 4.25-10.69 15.62 15.62 0 0 1 .72 4.68"
                fill="#348540"
              />
              <path
                d="M15 23.48a15.55 15.55 0 0 1-.72 4.68 15.54 15.54 0 0 1-3.53-15.37A15.5 15.5 0 0 1 15 23.48"
                fill="#7dbc42"
              />
            </svg>
            <h3 className="mt-3">CockroachDB</h3>
          </div>
        </div>
        <div className="pt-6 text-center mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="https://github.com/orgs/hadmean/projects/1/views/4"
            className="inline-flex items-center text-base font-medium text-primary hover:text-primary dark:text-primary-light dark:hover:text-primary"
          >
            Check Upcoming Integrations
            <svg
              className="w-5 h-5 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
