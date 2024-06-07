import'./ThanksModal.css'

export default function ThanksModal(props){

    const closeModal = (e) => {
        
        if(e.target === document.querySelector('.close__btn') || e.target.closest('.close__btn') || e.target === document.querySelector('.modal__wrapper'))  document.body.classList.remove('show__modal');
    }



    return (
        <div className='modal__wrapper' onClick={(e)=> closeModal(e)}>
            <div className='modal'>
                <button className="close__btn" onClick={(e)=> closeModal(e)}>
                <svg width={26} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#af2c2c" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#af2c2c" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                </button>
                <div className="modal__title">
                <svg width={60} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512" style={{fill:'#77bfdd'}}></circle> <path d="M461.3 642.8c3.5 0 7-1 9.8-2.9l.5-.3.4-.4c33.2-28.4 66.4-56.9 99.6-85.3 49.9-42.8 101.2-86.8 152.2-130.4-19 41.4-38.3 83.5-57 124.2-14.1 30.8-28.3 61.6-42.4 92.4-1 1.9-1.8 3.9-2.6 5.7-1.6 3.7-2.9 6.9-5 8.8l-.1.1-.1.1c-4.4 4.6-8.1 6.9-11.2 7H258.6c-1.2-.1-2.1-.2-2.8-.3.1-.3.2-.5.3-.8.2-.5.4-.9.6-1.3 12.8-28.7 25.6-57.3 38.4-86 17.7-39.6 36-80.6 54-121 2.1 3.9 4.2 7.9 6.3 11.7 3.3 6.2 6.7 12.5 10.1 18.7 16.9 31.4 34.1 63.3 50.7 94.2 10.2 18.9 20.3 37.8 30.5 56.7 2.4 5.5 8.1 9.1 14.6 9.1zm360.6-315.9c-19.5 16.8-39.2 33.4-58.6 50.3-4.1 10.1-8.9 19.9-13.4 29.8-38.5 83.9-77 167.7-115.5 251.6-6.2 11.3-18.3 21-31.9 19.7H262.6c-5.2.1-10.7.3-15.6-2-4.4-1.6-7.9-5.3-9.1-9.9v-6.1c1.3-4.9 3.8-9.4 5.8-14 31.3-70.1 62.6-140.1 93.9-210.2 3.2-7.3 9.5-12.9 16.6-16.4 6-3 13-3.1 19.5-4.2 112.9-16.4 225.8-32.8 338.8-49.2 9.6-1.6 19.3-2.4 28.8-4.4 25.4-16.1 50.4-32.9 75.8-49.1 3.1-2 7.9-1.3 9.5 2.3 1.7 4.4-.9 9.3-4.7 11.8zm-72.7 62.6c-94.4 80.9-188.8 161.8-283.1 242.7-3.5 2.3-9.5 1.8-11.1-2.6-27.1-50.4-54.3-100.8-81.4-151.3-8.3-15-16-30.4-24.6-45.2-3.7 4.2-5.5 9.6-7.9 14.7-30.9 69.2-61.9 138.4-92.8 207.6-1.6 3.6-4.3 8.2-1.1 11.7 2.9 2.7 7.1 3.4 11 3.6h347.1c7.1-.1 13.1-4.9 17.8-9.8 4.8-4.7 6.5-11.4 9.5-17.2L734 422.9c5-11 10.5-22 15.2-33.4zm66-66.7c-12 7.5-23.7 15.4-35.6 23.1-15.1 9.8-30.4 19.2-44.6 30.4l-265.4 171-105-106.1-5.8-7c34.2 63.9 69 127.6 103.2 191.5 11.8-9.6 23.1-19.7 34.7-29.5 92.2-79.1 184.4-158.1 276.7-237.2 13.9-12.2 28.1-23.9 41.8-36.2z" style={{fill: "#fff"}}></path> </g></svg>

                <h4>{props.modalTitle}</h4>
                </div>
                <p>{props.modalText}</p>
            </div>
        </div>
    )
}