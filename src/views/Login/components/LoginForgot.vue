<template>
    <div class="user-forgot">
      <div class="user-forgot__text">Забыл</div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM13.25 11C13.25 10.5858 12.9142 10.25 12.5 10.25H10.5C10.0858 10.25 9.75 10.5858 9.75 11C9.75 11.4142 10.0858 11.75 10.5 11.75H11.75V17C11.75 17.4142 12.0858 17.75 12.5 17.75C12.9142 17.75 13.25 17.4142 13.25 17V11ZM13.25 7C13.25 6.58579 12.9142 6.25 12.5 6.25C12.0858 6.25 11.75 6.58579 11.75 7V8C11.75 8.41421 12.0858 8.75 12.5 8.75C12.9142 8.75 13.25 8.41421 13.25 8V7Z"
          fill="#D5EE9B"
        />
      </svg>
    </div>
  </template>
  
  <style scoped lang="scss">
  .user-forgot {
    width: 120px;
    height: 48px;
  
    transition: all ease 0.5s;
  
    background: rgba(213, 238, 155, 0.1);
    border-radius: 24px;
  
    cursor: pointer;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    padding: 0 20px;
  
    &:hover {
      background: rgba(213, 238, 155, 0.2);
    }
  
    &__text {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
  
      color: #d5ee9b;
    }
  }
  </style>