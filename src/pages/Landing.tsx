
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Briefcase, ChevronDown, Filter, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { UserMenu } from '@/components/UserMenu';

const jobsList = [
  {
    id: 1,
    date: '20 May, 2023',
    company: 'Amazon',
    title: 'Senior UI/UX Designer',
    logo: 'amazon',
    logoElement: (
      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-black">
          <path d="M14.859 12.936c-.266.229-.658.273-.996.229-.514-.069-1.026-.183-1.526-.309-.069 0-.15-.057-.15-.149-.014-.492-.028-.984-.028-1.491v-.129c0-.355.014-.698.028-1.053.014-.103.083-.172.165-.172.5-.104 1.016-.194 1.516-.263.349-.046.72-.023.996.206.144.103.265.229.364.366.228.332.308.745.335 1.145.13.389-.107.8-.321 1.099-.103.149-.233.274-.383.366zm-9.113.973c-.389-.035-.78-.092-1.157-.16-.363-.069-.725-.16-1.087-.263-.055-.012-.099-.046-.123-.092a.173.173 0 01-.027-.132c.028-.332.054-.675.09-1.007v-.149c.035-.343.07-.675.104-1.019 0-.091.055-.148.144-.148h.014c.295-.8.59-.149.885-.206.308-.057.616-.103.923-.126.104 0 .159.08.173.172.028.48.055.973.07 1.456v.146c.014.492 0 .984-.014 1.476 0 .092-.069.172-.159.172-.281-.012-.561-.058-.841-.081l.005-.039zm13.304.194c-.403.286-.848.492-1.322.595-.233.046-.471.069-.705.058-.228-.012-.456-.046-.684-.104-.67-.172-1.23-.619-1.488-1.248-.172-.412-.227-.882-.2-1.317.041-.435.159-.859.377-1.236.32-.584.867-1.053 1.52-1.248.254-.069.517-.103.774-.103.256 0 .512.023.754.092.576.149 1.06.538 1.35 1.053.269.446.363.973.349 1.491 0 .572-.151 1.145-.472 1.583-.065.126-.16.263-.253.389v-.005zm-10.672.034c-.389.275-.82.481-1.281.584-.228.046-.458.069-.685.057a3.06 3.06 0 01-.725-.114c-.67-.183-1.212-.63-1.463-1.259-.172-.412-.24-.882-.213-1.317.027-.435.159-.858.363-1.236.336-.584.867-1.042 1.517-1.236.254-.069.52-.103.776-.103.254 0 .52.023.773.092.576.148 1.06.526 1.336 1.041.281.458.377.984.363 1.503-.014.572-.151 1.133-.486 1.582a3.39 3.39 0 01-.28.412l.005-.006zm15.226-3.081c-.281-.309-.684-.435-1.087-.389-.172.023-.349.069-.513.137-.104.046-.207.092-.297.149-.056.034-.139.011-.166-.058-.014-.023-.014-.046-.014-.069.014-.206.042-.4.069-.595 0-.069.056-.126.125-.138.35-.091.711-.16 1.074-.206.363-.034.726-.057 1.101-.034.083 0 .144.069.159.149.027.343.041.698.055 1.053v.16c.028.355.042.721.056 1.076v.16c.014.366.014.721.014 1.087 0 .058-.055.103-.111.103-.014 0-.014 0-.028-.011-.172-.092-.336-.149-.514-.206a.145.145 0 00-.13.011c-.048.035-.083.08-.11.126-.281.343-.629.538-1.03.607a2.73 2.73 0 01-.572.035c-.187-.012-.368-.035-.55-.09-.32-.126-.59-.4-.685-.744-.056-.169-.056-.35-.056-.527 0-.183.028-.354.084-.526.15-.378.446-.676.812-.847.308-.149.643-.218.985-.286.336-.058.67-.126.995-.218.056-.11.111-.034.139.023a.132.132 0 01.027.08v.229c.014.18-.069.366-.233.515v-.011zm-21.284 2.48c-.47.034-.947.046-1.418.046-.47 0-.935 0-1.405-.012-.062 0-.116-.046-.13-.103-.043-.332-.07-.675-.099-1.007v-.148c-.028-.343-.056-.675-.07-1.018-.028-.561-.028-1.133-.014-1.696.014-.057.07-.103.131-.103.47-.022.938-.034 1.407-.034h.066c.47 0 .95.012 1.419.034.063 0 .118.046.13.103.029.332.043.665.071 1.007v.149c.028.343.056.675.07 1.018.028.561.028 1.122.014 1.683-.016.071-.072.114-.134.126-.014 0-.014-.011-.028-.023-.004-.011-.004-.022-.01-.022zm3.47-3.538c-.254-.206-.607-.275-.923-.206-.172.034-.334.091-.486.16-.098.034-.095-.057-.095-.057s.037-.389.065-.595c0-.069.056-.126.125-.137.349-.092.71-.161 1.074-.195.362-.034.724-.057 1.087-.034.083 0 .144.069.159.149a66.48 66.48 0 01.056 1.052v.16c.028.355.042.722.056 1.077v.16c.014.366.014.721.014 1.087 0 .057-.056.103-.111.103-.014 0-.014 0-.028-.012-.17-.091-.335-.148-.512-.206a.152.152 0 00-.131.012c-.048.034-.082.08-.11.126-.281.343-.628.538-1.03.607a2.71 2.71 0 01-.571.034c-.186-.011-.368-.034-.549-.09-.321-.125-.59-.4-.685-.744-.056-.171-.056-.351-.056-.536 0-.183.028-.355.084-.527.151-.377.446-.675.81-.846.31-.149.644-.218.985-.286.337-.057.671-.126.996-.218.056-.11.111-.034.139.023a.132.132 0 01.027.08v.229c.014.182-.07.366-.233.515-.084.081-.159.149-.254.229-.28.309-.683.435-1.088.389-.172.023-.348.069-.51.137-.105.036-.209.081-.3.139zm14.02-2.343c.084-.034.167.023.181.114v.023c-.014.572-.014 1.156-.014 1.731 0 .378.083.744.281 1.065.172.263.452.412.753.412.308.011.602-.126.811-.366.214-.24.32-.55.32-.859.013-.675 0-1.351 0-2.026 0-.08.069-.149.15-.149.364-.011.726-.011 1.089 0 .069 0 .144.057.144.137.014.366.014.721.014 1.076v.149c0 .366-.014.721-.014 1.087v.16c-.014.354-.014.72-.026 1.075 0 .08-.07.138-.153.149-.321.012-.643.023-.964.012-.07 0-.139-.058-.139-.149-.013-.103-.013-.194-.026-.297 0-.023-.013-.035-.026-.046-.027-.012-.054 0-.084.023a1.74 1.74 0 01-.812.366c-.16.034-.322.046-.471.046-.148 0-.308-.012-.457-.046-.616-.126-1.088-.652-1.246-1.248-.055-.172-.083-.355-.097-.538-.014-.492-.014-.996-.014-1.49v-.434c.014-.092.097-.149.184-.126.363.035.738.035 1.1 0h.016zm-17.142.103c.14.011.295.011.431.034.364.046.697.16.995.366.335.24.561.584.684.973.11.355.137.722.124 1.087 0 .366-.056.744-.18 1.076-.134.354-.336.675-.602.928-.294.275-.655.446-1.045.538-.186.046-.361.057-.55.057-.187 0-.373-.011-.549-.057-.39-.092-.754-.263-1.046-.538a2.348 2.348 0 01-.601-.928c-.125-.332-.18-.698-.18-1.076-.013-.366.014-.721.124-1.087.125-.4.349-.744.684-.973.32-.206.684-.332 1.045-.366.123-.011.248-.034.362-.034h.304zm-.154.995c-.116.011-.228.034-.335.069-.172.057-.335.148-.456.274-.151.16-.254.366-.295.584-.056.229-.056.469-.042.71.014.229.055.457.15.675.11.229.265.424.47.561.228.137.483.206.74.194.254-.011.497-.103.688-.274a1.3 1.3 0 00.348-.458c.11-.206.152-.435.179-.664.028-.229.014-.47-.04-.698-.039-.229-.124-.435-.249-.607-.137-.172-.31-.309-.512-.389a1.853 1.853 0 00-.646-.103v.126zm-4.95 3.963c-.056-.046-.042-.126-.042-.183.027-.332.055-.675.08-1.007v-.137c.028-.343.056-.675.085-1.018.055-.607.093-1.225.12-1.844 0-.069.068-.126.137-.126.35-.011.698-.011 1.06 0 .068 0 .123.057.136.126.029.206.057.4.07.606.014.035.028.046.056.046.029 0 .056-.011.07-.035.184-.274.47-.469.794-.515.085-.012.17-.012.254-.012.068 0 .123.057.136.126.029.332.056.675.085 1.007v.148c.042.344.07.675.097 1.019.071.584.125 1.156.178 1.74 0 .07-.056.137-.125.149-.36.023-.732.034-1.105.023-.069 0-.137-.057-.137-.126-.055-.412-.083-.824-.125-1.236-.014-.171-.027-.332-.041-.504-.014-.057-.056-.103-.111-.114-.069-.012-.15 0-.214.022-.172.058-.308.206-.322.4-.028.446-.042.881-.07 1.317 0 .08-.07.137-.152.149-.363.022-.727.034-1.102.022-.072 0-.138-.057-.138-.126 0-.024 0-.035-.014-.047-.014-.022-.042-.011-.069.013-.28.263-.671.412-1.074.4-.151-.011-.295-.034-.429-.08-.32-.126-.528-.412-.59-.744-.082-.4-.055-.813.083-1.201.151-.4.42-.698.781-.904.282-.16.602-.24.922-.263.158-.12.305-.012.459 0 .082 0 .137.069.137.149.013.103.013.195.013.298 0 .034-.014.057-.042.069-.055.023-.125.034-.185.046-.265.08-.514.218-.684.446-.151.194-.213.446-.17.7.013.103.055.195.124.275a.392.392 0 00.361.091c.042-.11.083-.34.111-.057.125-.08.24-.183.323-.32.048-.69.09-.16.132-.24.068-.137.137-.274.206-.412.137-.297.254-.584.39-.893.11-.251.228-.526.376-.755.07-.114.153-.217.251-.32.056-.58.124-.104.191-.15.125-.058.254-.092.39-.092.151 0 .295.034.433.08.207.092.363.263.46.458.11.252.151.515.192.78.056.332.098.664.154.996.056.366.125.732.181 1.098.014.058.028.126.042.195.018.068.035.148.053.217.014.035.056.058.097.046.055-.11.07-.57.07-.103.053-.4.095-.789.133-1.19.042-.4.056-.801.084-1.19.013-.126.055-.251.123-.366.041-.069.097-.137.165-.183.082-.07.193-.104.32-.104.253 0 .52.092.67.309.029.046.057.091.071.137.124.298.22.607.32.916.81.218.164.435.246.653.096.24.178.48.26.721.028.068.056.148.096.217.14.023.042.034.07.034.04 0 .068-.022.081-.045.028-.069.042-.16.056-.24.055-.4.083-.801.124-1.202.041-.4.055-.79.083-1.19.014-.114.056-.24.138-.32.056-.057.124-.103.206-.114.083-.12.166-.12.25-.012.11.023.214.068.308.137.152.115.254.298.309.481.056.217.083.435.11.652.042.355.07.722.11 1.077.029.343.07.687.111 1.03.056.44.125.87.206 1.306.014.069-.042.126-.11.137-.37.035-.753.046-1.141.035-.069 0-.124-.058-.137-.126-.056-.332-.098-.664-.139-.995-.014-.126-.028-.24-.042-.366-.013-.057-.028-.126-.041-.194-.014-.046-.056-.08-.11-.08-.056 0-.097.034-.111.08a1.74 1.74 0 01-.07.171c-.124.275-.357.504-.67.584-.336.091-.684.011-.95-.206-.123-.126-.205-.274-.26-.458-.07-.229-.11-.469-.164-.71-.042-.229-.098-.446-.151-.675-.014-.057-.028-.103-.042-.16-.014-.034-.042-.057-.083-.057-.042 0-.07.023-.084.057l-.055.16c-.139.458-.265.904-.404 1.362-.11.354-.294.675-.56.928-.322.297-.725.458-1.159.504-.152.011-.307.011-.459 0-.321-.034-.629-.126-.923-.274zm-2.092-5.071c.35-.022.712-.034 1.073-.034h.07c.362 0 .711.012 1.073.034.07 0 .123.058.137.126.027.332.055.675.083 1.007v.149c.025.342.055.675.067 1.018.029.56.029 1.133.014 1.695-.14.058-.056.114-.138.126-.349.023-.71.035-1.059.035h-.111c-.349 0-.697-.012-1.046-.035-.083-.012-.137-.068-.15-.126-.03-.332-.058-.675-.084-1.007v-.148c-.029-.343-.056-.675-.07-1.018-.029-.562-.029-1.133-.014-1.695.014-.069.069-.126.139-.126l.016-.001z"/>
        </svg>
      </div>
    ),
    skills: ['UI/UX', 'Project work', 'Senior level', 'Distant'],
    salary: '$250/hr',
    location: 'San Francisco, CA',
    color: 'bg-orange-50',
    logoColor: 'text-black',
  },
  {
    id: 2,
    date: '4 Feb, 2023',
    company: 'Google',
    title: 'Junior UI/UX Designer',
    logo: 'google',
    logoElement: (
      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M22.32 10.08h-10.24v3.92h5.92c-.46 2.3-2.46 4.03-5.45 4.03-3.35 0-6.05-2.7-6.05-6.04s2.7-6.04 6.05-6.04c1.46 0 2.78.5 3.83 1.3l2.76-2.75C17.22 2.87 14.67 2 11.92 2 6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10 5.38 0 9.8-3.55 9.8-9.43 0-.84-.07-1.65-.2-2.43z" fill="#4285f4"/><path d="M3.19 14.68l3.12 2.3c.84 2.54 3.18 4.38 5.92 4.38 3 0 5.55-1.52 6.92-3.98l-3.16-2.45c-.86 1.5-2.44 2.52-4.26 2.52-2.5 0-4.63-1.7-5.38-4.02L3.2 14.68z" fill="#34a853"/><path d="M3.15 9.19l-3.15 2.36C1.62 7.2 6.3 2.81 12 2.81c2.75 0 5.3.87 7.28 2.53L15.85 6.1C14.8 5.3 13.48 4.8 12.02 4.8c-3.4 0-6.33 2.58-6.93 5.93l-1.94-1.54z" fill="#fbbc05"/><path d="M12.02 4.8c2.05 0 3.88.7 5.32 2.08L20.1 4.1C17.97 2.03 15.23 1 12.02 1 6.37 1 1.62 5.5.16 11.6l3.15-2.4C4.1 6.74 7.8 4.8 12.02 4.8z" fill="#ea4335"/>
        </svg>
      </div>
    ),
    skills: ['UI/UX', 'Full time', 'Junior level', 'Distant', 'Project work', 'Flexible Schedule'],
    salary: '$150/hr',
    location: 'California, CA',
    color: 'bg-green-50',
    logoColor: 'text-gray-800',
  },
  {
    id: 3,
    date: '29 Jan, 2023',
    company: 'Dribbble',
    title: 'Senior Motion Designer',
    logo: 'dribbble',
    logoElement: (
      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#ea4c89">
          <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm9.95 13.5a10.816 10.816 0 0 0-2.247-.297c-.975-.005-1.94.17-2.857.516-.246-1.095-.609-2.168-1.079-3.199.887-.58 1.677-1.286 2.343-2.096A9.95 9.95 0 0 1 21.95 13.5zm-3.228-6.275a9.835 9.835 0 0 1-2.057 1.833 29.293 29.293 0 0 0-1.621-2.683C8.825 6.143 8.602 6 8.535 6a.02.02 0 0 0-.014.001 10.015 10.015 0 0 0-4.734 3.025l-.424-.352C4.604 5.913 7.465 4.071 10.785 4.007a10.056 10.056 0 0 1 7.937 3.218zM7.578 7.382c.04 0 .073.006.098.018a19.825 19.825 0 0 1 1.9 3.301c-2.403.843-5.16 1.26-8.043 1.26H2v-.092c.085-4.056 2.486-7.633 5.578-8.487zm-4.34 6.551V14c0 1.855.505 3.592 1.383 5.08-1.035-1.028-1.825-2.306-2.312-3.725a9.9 9.9 0 0 1-.376-1.926c.316.046.673.069 1.063.069 1.818 0 3.95-.367 6.346-1.096-.18.474-.354.942-.52 1.399-1.82.822-3.18 2.397-3.753 4.304-.132.044-.255.073-.368.073h-.001c-1.656.087-3.093-.821-4.045-2.168a9.967 9.967 0 0 1 2.583-6.917zm5.023 10.009a9.942 9.942 0 0 1-5.851-1.869c.816-.986 1.839-1.592 2.902-1.685h.001c.162 0 .332.041.519.126 1.616.741 2.747 2.75 3.266 4.474a9.92 9.92 0 0 1-.837-1.046zm1.371 1.001a9.966 9.966 0 0 1-1.013.052c-.35 0-.696-.018-1.038-.052-.577-1.82-1.695-3.95-3.231-4.991a9.555 9.555 0 0 0-.644-.346c.394-1.468 1.514-2.656 3.02-3.321.132-.054.245-.082.337-.082 1.828 0 3.234 2.223 4.382 5.226-2.382 1.355-4.377 2.351-5.94 2.809a10.088 10.088 0 0 0 4.127-1.048v1.753zm1.624-.244v-3.15c1.214-.348 2.503-.957 3.852-1.833.124.81.189 1.64.189 2.49a9.9 9.9 0 0 1-1.995 5.987 9.933 9.933 0 0 1-2.046-3.494zm3.433-6.024c.914-.39 1.878-.6 2.85-.618.705.017 1.403.135 2.076.349A9.977 9.977 0 0 1 19.47 18.01a9.927 9.927 0 0 1-3.703-.308 9.94 9.94 0 0 0 1.533-5.026c.266-.108.528-.219.788-.333.055-.022.11-.046.165-.07z"/>
        </svg>
      </div>
    ),
    skills: ['Part time', 'Senior level', 'Full Day', 'Shift work'],
    salary: '$260/hr',
    location: 'New York, NY',
    color: 'bg-purple-50',
    logoColor: 'text-purple-500',
  },
  {
    id: 4,
    date: '11 Apr, 2023',
    company: 'Twitter',
    title: 'UX Designer',
    logo: 'twitter',
    logoElement: (
      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#1DA1F2">
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
        </svg>
      </div>
    ),
    skills: ['Full time', 'Middle level', 'Distant', 'Project work'],
    salary: '$120/hr',
    location: 'California, CA',
    color: 'bg-blue-50',
    logoColor: 'text-blue-500',
  },
  {
    id: 5,
    date: '2 Apr, 2023',
    company: 'Airbnb',
    title: 'Graphic Designer',
    logo: 'airbnb',
    logoElement: (
      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF5A5F">
          <path d="M12.03 4.97c-.33-.4-.65-.76-.89-1.07-.42-.54-.81-.96-1.14-1.24-.33-.29-.65-.47-.93-.47s-.6.18-.93.47c-.33.28-.72.7-1.14 1.24-.24.31-.56.67-.89 1.07-.86 1.05-1.73 2.29-2.38 3.54-.64 1.24-1.09 2.49-1.09 3.73 0 2.02.76 3.82 1.97 5.15 1.2 1.32 2.92 2.15 4.83 2.15 1.91 0 3.63-.83 4.83-2.15 1.21-1.33 1.97-3.13 1.97-5.15 0-1.24-.45-2.49-1.09-3.73-.65-1.25-1.52-2.49-2.38-3.54zm1.91 11.62c-.96 1.06-2.33 1.72-3.85 1.72-1.52 0-2.89-.66-3.85-1.72-.98-1.08-1.58-2.56-1.58-4.22 0-1.07.41-2.2.96-3.31.56-1.11 1.33-2.21 2.1-3.13.28-.33.55-.64.79-.91.36-.41.68-.77.96-1.03.14-.13.25-.23.34-.3.02-.01.03-.02.03-.02s.01.01.03.02c.09.07.2.17.34.3.28.26.6.62.96 1.03.24.27.51.58.79.91.77.92 1.54 2.02 2.1 3.13.55 1.11.96 2.24.96 3.31 0 1.66-.6 3.14-1.58 4.22z"/>
        </svg>
      </div>
    ),
    skills: ['Part time', 'Senior level'],
    salary: '$300/hr',
    location: 'New York, NY',
    color: 'bg-pink-50',
    logoColor: 'text-pink-500',
  },
  {
    id: 6,
    date: '18 Jan, 2023',
    company: 'Apple',
    title: 'Graphic Designer',
    logo: 'apple',
    logoElement: (
      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#000000">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      </div>
    ),
    skills: ['Part time', 'Distant'],
    salary: '$140/hr',
    location: 'San Francisco, CA',
    color: 'bg-gray-50',
    logoColor: 'text-gray-800',
  },
];

const Landing = () => {
  const [salaryRange, setSalaryRange] = useState([1200, 2000]);
  const [filter, setFilter] = useState('Last updated');
  const [profession, setProfession] = useState('Designer');
  const [location, setLocation] = useState('Work location');
  const [experience, setExperience] = useState('Experience');
  const [periodicity, setPeriodicity] = useState('Per month');

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 w-full">
        <div className="w-full px-4 xl:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-10">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor"/>
                </svg>
                <span className="text-xl font-semibold">LuckyJob</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-gray-300">Find job</Link>
                <Link to="/messages" className="hover:text-gray-300">Messages</Link>
                <Link to="/" className="hover:text-gray-300">Hiring</Link>
                <Link to="/" className="hover:text-gray-300">Community</Link>
                <Link to="/" className="hover:text-gray-300">FAQ</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center">
                <UserMenu />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-black text-white py-4 px-6 w-full">
        <div className="w-full px-4 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="relative rounded-full bg-gray-900 flex items-center">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <select
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="w-full appearance-none bg-transparent border-none rounded-full py-2 pl-10 pr-10 text-white focus:outline-none"
                >
                  <option>Designer</option>
                  <option>Developer</option>
                  <option>Manager</option>
                  <option>Marketing</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-full bg-gray-900 flex items-center">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full appearance-none bg-transparent border-none rounded-full py-2 pl-10 pr-10 text-white focus:outline-none"
                >
                  <option>Work location</option>
                  <option>Remote</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-full bg-gray-900 flex items-center">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full appearance-none bg-transparent border-none rounded-full py-2 pl-10 pr-10 text-white focus:outline-none"
                >
                  <option>Experience</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-full bg-gray-900 flex items-center">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <select
                  value={periodicity}
                  onChange={(e) => setPeriodicity(e.target.value)}
                  className="w-full appearance-none bg-transparent border-none rounded-full py-2 pl-10 pr-10 text-white focus:outline-none"
                >
                  <option>Per month</option>
                  <option>Per week</option>
                  <option>Per hour</option>
                  <option>Per project</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Salary Range */}
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span>Salary range</span>
              <span>${salaryRange[0]}-${salaryRange[1]}</span>
            </div>
            <Slider
              defaultValue={salaryRange}
              min={1200}
              max={2000}
              step={100}
              onValueChange={setSalaryRange}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 xl:px-12 py-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            {/* CTA Card */}
            <div className="rounded-2xl overflow-hidden mb-8 relative">
              <div 
                className="p-6 text-white" 
                style={{
                  background: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
                  minHeight: "200px"
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2">Get Your best profession</h2>
                  <p className="text-xl font-bold mb-6">with LuckyJob</p>
                  <Button variant="secondary" className="bg-blue-400 hover:bg-blue-500 text-white">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Filter className="w-4 h-4 text-gray-500" />
              </div>

              {/* Working schedule */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-500 mb-3">Working schedule</h4>
                <div className="space-y-2">
                  {['Full time', 'Part time', 'Internship', 'Project work', 'Volunteering'].map((schedule) => (
                    <div key={schedule} className="flex items-center">
                      <Checkbox id={schedule.toLowerCase().replace(" ", "-")} className="mr-2" />
                      <label htmlFor={schedule.toLowerCase().replace(" ", "-")} className="text-sm">{schedule}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employment type */}
              <div>
                <h4 className="text-sm text-gray-500 mb-3">Employment type</h4>
                <div className="space-y-2">
                  {['Full day', 'Flexible schedule', 'Shift work', 'Distant work', 'Shift method'].map((type) => (
                    <div key={type} className="flex items-center">
                      <Checkbox id={type.toLowerCase().replace(" ", "-")} className="mr-2" />
                      <label htmlFor={type.toLowerCase().replace(" ", "-")} className="text-sm">{type}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">Recommended jobs</h2>
                <span className="ml-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">387</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="relative">
                  <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="appearance-none bg-transparent pr-8 font-medium focus:outline-none cursor-pointer"
                  >
                    <option>Last updated</option>
                    <option>Salary: High to Low</option>
                    <option>Salary: Low to High</option>
                    <option>Most recent</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Sliders className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobsList.map(job => (
                <div key={job.id} className={`rounded-2xl overflow-hidden border border-gray-100 shadow-sm ${job.color}`}>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">{job.date}</span>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm text-gray-600">{job.company}</p>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                      </div>
                      {job.logoElement}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 my-4">
                      {job.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-white px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <div>
                        <p className="font-bold">{job.salary}</p>
                        <p className="text-sm text-gray-600">{job.location}</p>
                      </div>
                      <Button className="bg-black text-white hover:bg-gray-800">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
