interface MeltedIcecreamProps {
  outlineClassName?: React.HTMLAttributes<SVGElement>['className'];
  backgroundClassName?: React.HTMLAttributes<SVGElement>['className'];
  className?: React.HTMLAttributes<SVGElement>['className'];
}

export default function MeltedIcecream({
  outlineClassName,
  backgroundClassName,
  className
}: MeltedIcecreamProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 176.29 247.42'
      className={className}
    >
      <path
        d='M10.88,14.93C10.78,11.47,9.16,.24,14.87,0c2.59-.09,4.91,2.81,6.6,4.32,2.94,2.63,5.84,5.29,8.71,8,12.41,11.76,24.1,24.32,34.89,37.58,5.28,6.49,10.12,13.52,16.62,18.85,2.87,2.35,5.69,4.36,7.87,7.4,2.21,3.09,3.97,6.38,6.84,8.94,1.38-.1,2.78-.02,4.21,.36,9.48,2.41,13.33,13.43,8.16,21.38,10.18,5.25,12.57,18.19,11.58,28.77-.3,3.22-.89,6.41-1.74,9.53,0,.02,0,.04-.01,.06-.04,.13-.07,.25-.11,.38,0,.01-.01,.03-.01,.04-.27,.83-.57,1.76-.86,2.76-1.41,4.95-2.33,11.37,3.41,13.33,3.58,1.22,7.76,.01,11.49,.82,4.57,.99,12.41,5.08,9.7,11.08-2.5,5.53-11.82,2.65-16.45,3.46-2.46,.43-5.6,.73-2.36,2.68,1.3,.79,2.85,1.29,4.33,1.59,4.9,.98,10.25,.41,15.25,1.04,8.87,1.12,17.57,3.51,25.76,7.1,5.1,2.24,9.67,5.38,6.48,11.31-3.17,5.88-11.25,8.18-16.96,10.51-7.95,3.26-16.02,5.64-24.4,7.5-9.08,2.01-16.02,7.17-24.21,11.28-2.91,1.47-6.52,2.61-7.05,6.29-.21,1.47,.23,2.95-.1,4.46-.37,1.65-1.23,3.16-2.45,4.32-5.13,4.83-11.61,1-16.21-2.44-7.77-5.82-15.05-9.25-24.93-9.25s-16.76-1.35-25.27-5.63c-7.43-3.74-15.99-1.5-23.82-3.93C4.23,222.15-.24,217.75,0,211.57c.19-4.44,2.92-7.73,7.01-9.18,3.79-1.33,10.09-1.65,8.04-7.31-.94-2.58-2.64-4.81-3.74-7.32-1.6-3.64-1.59-7.76,1.28-10.8,5.32-5.63,13.24-1.48,19.67-3.29,7.38-2.08,6.98-10.01,4.23-15.73-.02-.05-.04-.09-.06-.13-.07-.14-.14-.28-.22-.42-.26-.54-.54-1.07-.85-1.6-.9-1.68-1.9-3.3-3.12-4.78-.24-.29-.49-.57-.74-.84-.02-.02-.03-.04-.05-.05-3.84-4.02-9.27-5.86-13.41-9.54-6.4-5.69-5.31-13.07-1.54-19.3-.12-.17-.21-.35-.24-.61-.97-9.2-1.86-18.41-2.11-27.66-.23-9.16,1.46-18.37,.8-27.48-.6-8.41-2.01-16.76-2.65-25.18-.63-8.46-1.16-16.93-1.43-25.42Z'
        className={backgroundClassName}
      />
      <path
        d='M24.74,113.11c.03,.07,.07,.13,.12,.2,.04,.07,.08,.14,.12,.22,.01,.01,.01,.02,.02,.03,.1,.19,.34,.11,.35-.23h0c0-.19,.01-.37,.02-.54,0-.1,.01-.21,.02-.31-.21,.21-.43,.42-.65,.63Zm-2.43,2.18c-.3,.26-.61,.52-.93,.78,.06,.19,.13,.38,.2,.56,.17,.42,.8,.33,.79-.14-.01-.4-.03-.8-.06-1.2Zm0,0c-.3,.26-.61,.52-.93,.78,.06,.19,.13,.38,.2,.56,.17,.42,.8,.33,.79-.14-.01-.4-.03-.8-.06-1.2Zm2.43-2.18c.03,.07,.07,.13,.12,.2,.04,.07,.08,.14,.12,.22,.01,.01,.01,.02,.02,.03,.1,.19,.34,.11,.35-.23h0c0-.19,.01-.37,.02-.54,0-.1,.01-.21,.02-.31-.21,.21-.43,.42-.65,.63Zm92.88,35.26c.32-.91,.6-1.84,.86-2.76-.27,.83-.57,1.76-.86,2.76ZM22.31,115.29c-.3,.26-.61,.52-.93,.78,.06,.19,.13,.38,.2,.56,.17,.42,.8,.33,.79-.14-.01-.4-.03-.8-.06-1.2Zm2.43-2.18c.03,.07,.07,.13,.12,.2,.04,.07,.08,.14,.12,.22,.01,.01,.01,.02,.02,.03,.1,.19,.34,.11,.35-.23h0c0-.19,.01-.37,.02-.54,0-.1,.01-.21,.02-.31-.21,.21-.43,.42-.65,.63Zm144.01,76.36c-8.19-3.59-16.89-5.98-25.76-7.1-5-.63-10.35-.06-15.25-1.04-1.48-.3-3.03-.8-4.33-1.59-3.24-1.95-.1-2.25,2.36-2.68,4.63-.81,13.95,2.07,16.45-3.46,2.71-6-5.13-10.09-9.7-11.08-3.73-.81-7.91,.4-11.49-.82-5.74-1.96-4.82-8.38-3.41-13.33,.29-1,.59-1.93,.86-2.76,0-.01,.01-.03,.01-.04,.04-.13,.07-.25,.11-.38,.01-.02,.01-.04,.01-.06,.85-3.12,1.44-6.31,1.74-9.53,.99-10.58-1.4-23.52-11.58-28.77,5.17-7.95,1.32-18.97-8.16-21.38-1.43-.38-2.83-.46-4.21-.36-2.87-2.56-4.63-5.85-6.84-8.94-2.18-3.04-5-5.05-7.87-7.4-6.5-5.33-11.34-12.36-16.62-18.85-10.79-13.26-22.48-25.82-34.89-37.58-2.87-2.71-5.77-5.37-8.71-8C19.78,2.81,17.46-.09,14.87,0c-5.71,.24-4.09,11.47-3.99,14.93,.27,8.49,.8,16.96,1.43,25.42,.64,8.42,2.05,16.77,2.65,25.18,.66,9.11-1.03,18.32-.8,27.48,.25,9.25,1.14,18.46,2.11,27.66,.03,.26,.12,.44,.24,.61-3.77,6.23-4.86,13.61,1.54,19.3,4.14,3.68,9.57,5.52,13.41,9.54,.02,0,.03,.03,.05,.05,.25,.27,.5,.55,.74,.84,1.22,1.48,2.22,3.1,3.12,4.78,.31,.53,.59,1.06,.85,1.6,.08,.14,.15,.28,.22,.42,.02,.04,.04,.08,.06,.13,2.75,5.72,3.15,13.65-4.23,15.73-6.43,1.81-14.35-2.34-19.67,3.29-2.87,3.04-2.88,7.16-1.28,10.8,1.1,2.51,2.8,4.74,3.74,7.32,2.05,5.66-4.25,5.98-8.04,7.31-4.09,1.45-6.82,4.74-7.01,9.18-.25,6.18,4.22,10.58,9.82,12.32,7.83,2.43,16.39,.19,23.82,3.93,8.51,4.28,15.83,5.63,25.27,5.63s17.16,3.43,24.93,9.25c4.6,3.44,11.08,7.27,16.21,2.44,1.22-1.16,2.08-2.67,2.45-4.32,.33-1.51-.11-2.99,.1-4.46,.53-3.68,4.14-4.82,7.05-6.29,8.19-4.11,15.13-9.27,24.21-11.28,8.38-1.86,16.45-4.24,24.4-7.5,5.71-2.33,13.79-4.63,16.96-10.51,3.19-5.93-1.38-9.07-6.48-11.31ZM15.84,58.36c-.7-4.41-.95-8.94-1.29-13.4-.36-4.78-.67-9.55-.92-14.33-.11-2.16-.22-4.31-.31-6.47-.07-1.36,.33-3.97-.24-5.21-.11-1.73-.2-3.45-.24-5.18,.02,.02,.03,.05,.05,.07-.04-1.51-.06-2.35-.06-2.35,0-1.12,.03-2.26,.11-3.37,1.53,2,3.53,3.76,5.28,5.54,1.59,1.61,3.1,3.92,5.32,4.53,.18,.06,.4-.07,.36-.27-.65-2.36-3.14-4.04-4.82-5.73-1.88-1.9-3.77-4.08-5.99-5.62,.04-.45,.07-.93,.14-1.39,.05-.49,.16-.89,.29-1.21,.43,1.36,2.12,2.54,3.12,3.47,.96,.89,2.25,2.54,3.64,2.52,.05-.01,.08-.04,.07-.08-.25-1.38-2.15-2.43-3.11-3.34-1.01-.96-2.08-2.65-3.44-3.07,1.89-2.54,7.28,3.34,8.83,4.74,3.26,2.94,6.47,5.96,9.63,9.02,11.2,10.87,21.78,22.4,31.63,34.51,5,6.15,9.64,12.75,15.71,17.93,3.28,2.79,6.56,5.06,9.04,8.65,1.76,2.55,3.29,5.08,5.61,7.05-.79,.13-1.58,.31-2.35,.52-1.18-1.9-2.8-3.57-4.22-5.25-1.51-1.78-2.99-4.51-5.29-5.23-.18-.06-.38,.09-.35,.29,.35,2.39,2.82,4.27,4.34,6.03,1.3,1.52,2.57,3.18,4.05,4.58-1.34,.37-2.69,.79-4.06,1.15-.91-1.35-1.81-2.95-3.31-3.69-.13-.07-.26,.08-.24,.2,.14,1.42,1.09,2.68,1.97,3.85-1.06,.21-2.04,.28-2.96,.23h-.01c-.21,.1-2.74,.98-8.02-2.51-5.53-3.64-8.02-5.17-13.81-3.1-5.77,2.08-9.7-3.62-16.93,2.04-6.31,4.94-4.54,15.18-17.67,28-.01,.1-.02,.21-.02,.31-.01,.17-.02,.35-.02,.53h0c-.01,.35-.25,.43-.35,.24-.01-.01-.01-.02-.02-.03-.04-.08-.08-.15-.12-.22-.04-.07-.08-.14-.12-.2-.76,.72-1.57,1.45-2.43,2.18,.03,.4,.05,.8,.06,1.2,.01,.47-.62,.56-.79,.14-.07-.18-.14-.37-.2-.56-.87,.73-1.79,1.46-2.77,2.19,0,0-.01-.11-.03-.3,0-.07-.01-.14-.02-.22-.38-2.83-2.08-16.64-1.43-21.84,.01-.01,0-.02,0-.02-.21-5.79-.23-11.58,.02-17.37,.29-6.9-.24-13.34-1.31-20.15Zm2.41,78.56c-3.83-4.78-2.06-10.88,1.17-15.45,3.18-4.51,7.79-7.74,11.5-11.75,3.29-3.55,5.25-7.52,6.92-12.01,1.9-5.08,3.91-10.83,9.24-13.27,4.44-2.05,8.47,1.75,13.04,.25,3.37-1.09,5.42-1.45,8.62,.33,1.96,1.08,3.71,2.5,5.66,3.6,2.14,1.22,4.26,1.85,6.44,1.98,1.95,.12,3.94-.14,6.04-.71,5.56-1.52,10.91-3.97,16.44-.88,6.25,3.47,7.62,11.29,4.02,17.15-.02-.01-.07-.01-.11-.02-1.61-.89-3.15-1.86-4.68-3.16-1.48-1.29-2.94-2.48-4.73-3.34-1.71-.84-3.53-1.43-5.39-1.86-2.4-.56-4.87-.87-7.29-1.16-4.87-.56-8.71-.47-13.15,1.68-3.88,1.87-7.99,1.79-11.52,4.64-.4,.3-.76,.63-1.12,.96-2.57,1.28-5.75,5-6.76,5.98-4.01,3.8-7.7,7.94-10.26,12.86-2.85,5.47-3.77,16.61-11.63,16.94-2.11,.1-7.8-2.28-10.11-.46-.85-.68-1.63-1.44-2.34-2.3Zm6.73,3.29c1.23,.18,2.4,.68,3.62,.89,1.92,.37,3.7,.26,5.47-.61,3.94-1.97,5.62-6.23,6.85-10.17,1.65-5.24,3.77-9.84,7.27-14.13,1.82-2.22,3.82-4.27,5.89-6.24,.36-.34,1.14-1.18,2.05-2.1-3.26,5.24-4.33,11.84-5.38,17.83-.91,5.2-2.45,10.57-5.81,14.75-1.69,2.08-3.74,3.63-6.16,4.72-2.05,.92-3.95,1.51-5.68,2.92-.97-1.07-2.05-2.07-3.29-2.95-2.33-1.64-5.03-2.96-7.46-4.6,.81-.28,1.62-.45,2.63-.31Zm145.79,62.51c-1.82,1.21-3.9,2.03-5.89,2.91-8.93,3.99-18.08,7.36-27.65,9.44-3.27,.71-6.58,1.36-9.74,2.52-3.9,1.43-7.1,3.96-10.7,5.99-4.59,2.59-12.69,4.52-15.3,9.48-1.79,3.4,.52,8.78-3.64,10.64-3.97,1.78-8.22-.95-11.35-3.2-6.51-4.68-12.74-9.2-20.97-10.06-4.34-.46-8.71,.06-13.05-.22-5.01-.32-9.75-1.84-14.28-3.96-3.31-1.56-6.15-3.32-9.85-3.77-3.64-.44-7.34-.2-11-.6-4.31-.47-9.32-1.43-12.48-4.71-1.2-1.25-2.69-3.51-2.72-5.28-.02-1.16,1.81-5.12,2.62-5.75,.93-.73,2.65-.94,3.77-1.25,4.01-1.11,7.67-2.38,8.86-6.81,1.56-5.86-4.15-9.51-4.95-14.82-.95-6.23,6.01-6.49,10.39-6.22,3.98,.24,8.12,.85,11.68-1.41,3.53-2.24,5.24-6.47,5.8-10.62,.11-.84,.17-1.67,.2-2.48,.06-1.84-.89-4.43-2.46-7.17h.01c-1.2-2.17-2.48-4.28-4.02-6.19,3.24-2.65,7.65-3.1,10.74-6.11,2.59-2.53,4.39-5.77,5.64-9.14,3.14-8.55,3.03-18.55,8.6-26.09,1.52-2.07,3.47-3.82,5.83-4.9,2.02-.92,4.16-.86,6.21-1.55,2.53-.86,4.15-2.4,6.98-2.73,2.61-.3,5.32,.1,7.93,.43,4.51,.57,9.2,1.25,13.02,3.94,5.89,4.15,13.82,8.42,16.69,15.54,2.06,5.09,2.47,10.82,2.01,16.25-.28,3.29-.9,6.74-1.85,10.19l-.03,.09s-.02,.07-.03,.11c-.02,.08-.05,.17-.08,.25-.09,.34-.19,.68-.3,1.02-.04,.15-.09,.3-.13,.46-.72,2.75-1.31,6.3-1.09,9.52,.16,2.32,.74,4.47,2,6.04,3.89,4.88,12.3,2.05,17.55,3.89,2.75,.97,10.14,5.73,4.05,7.14-3.54,.82-7.44-.24-11.06,.33-2.78,.43-7.82,2.29-7.29,6.03,.58,4.11,7.48,4.86,10.69,4.93,9.78,.22,19.33,1.51,28.66,4.54,3.91,1.27,8.14,2.67,11.73,4.73,.81,.46,2.32,1.17,2.82,1.96,2.08,3.28-.55,5.34-2.57,6.67ZM97.54,105.02c2.44,1.29,4.89,2.55,7.22,4.03,1.87,1.19,4.02,2.19,4.47,4.46,.05,.23-.17,.45-.4,.42-1.97-.23-3.17-1.72-4.82-2.78-2.01-1.3-4.14-2.39-6.25-3.52-2.3-1.23-4.56-2.59-7.06-3.37-2.08-.65-4.25-.81-6.31-1.52-.54-.19-.46-1.04,.11-1.11,4.77-.63,8.93,1.22,13.03,3.39Zm14.89,13.97c-1.06-.95-1.42-2.23-1.71-3.58-.08-.36,.46-.62,.68-.31,.7,1,1.64,1.81,2.24,2.88,.38,.68-.61,1.54-1.21,1Zm1.38,16.41c.38-4.31-.07-8.61-.2-12.92,0-.33,.46-.55,.6-.18,1.51,3.92,1.74,8.02,1.49,12.19-.18,2.9-.17,9-2.79,10.82-.12,.08-.31,.07-.37-.08-.63-1.65,.05-2.61,.45-4.42,.39-1.78,.67-3.59,.83-5.41Zm-2.19,13.23c.09,.75,.09,1.45-.24,2.15-.24,.49-.78,1.12-1.42,.88-.5-.19-.41-1-.24-1.37,.32-.68,.83-1.21,1.28-1.81,.17-.24,.6-.17,.63,.15Zm-47.49,23.25c.69-.29,1.37-.49,2.13-.36,.53,.09,1.3,.44,1.24,1.12-.04,.53-.85,.68-1.24,.61-.75-.12-1.39-.46-2.09-.72-.27-.1-.33-.53-.04-.65Zm-5.65-53.34c-.05,.55-.08,1.14-.29,1.66-.23,.57-.7,.84-1.07,1.3-.13,.16-.37,.07-.37-.14,.02-.59-.13-1.11,.05-1.68,.17-.53,.55-1,.87-1.44,.26-.36,.85-.15,.81,.3Zm-1.6,5.94c-1.56,5.08-1.99,10.23-4.46,15.03-1.62,3.14-4.76,8.48-8.73,8.76-.28,.02-.43-.24-.3-.48,1.08-2.01,3.26-3.25,4.71-5.01,1.57-1.89,2.82-4.05,3.81-6.3,1.7-3.86,1.68-9.05,4.51-12.24,.19-.21,.54-.05,.45,.24Zm-15.08,25.33c-.83,.57-1.47,1.45-2.58,1.39-.15,0-.26-.14-.29-.27-.29-1.42,1.32-2.01,2.43-2.08,.48-.03,.93,.62,.44,.96Zm68.29-25.89c-2.21-1.07-3.01-4.3-4.5-6.18-1.65-2.08-4.47-3.16-5.74-5.46-.11-.19,.13-.43,.32-.34,2.64,1.16,4.92,2.39,6.78,4.67,1.45,1.77,3.89,4.75,3.46,7.13-.03,.14-.17,.27-.32,.2Zm-48.42,47.46c-2.11,1.17-5.72-.2-7.85-1.01-2.75-1.04-4.64-2.81-6.58-4.95-.14-.16,0-.45,.22-.41,2.59,.47,4.51,2.8,7.01,3.7,2.26,.81,5.57,.54,7.29,2.3,.12,.12,.03,.3-.09,.37Zm49.29-44.5c.32,.78,.56,1.59,.61,2.44,.05,.76-.24,1.41-.65,2.05-.08,.12-.26,.07-.29-.07-.12-.66-.27-1.27-.25-1.94,.02-.76-.02-1.5-.16-2.25-.08-.43,.57-.63,.73-.22Zm-.11,14.06c-.14,.74-.29,1.53-.56,2.24-.3,.81-.55,.88-1.16,1.43-.12,.11-.35,.03-.36-.14-.07-.66-.22-.98-.07-1.64,.18-.77,.43-1.51,.59-2.29,.29-1.42,.67-2.93,.82-4.37,.04-.4,.67-.43,.72-.02,.2,1.67,.34,3.1,.02,4.78Zm-65.99-16.51c-.25-2.25,1.87-4.78,3.05-6.58,1.34-2.05,2.95-5,5.29-6,.15-.07,.28,.08,.24,.23-.65,2.41-2.95,4.55-4.3,6.64-1.21,1.88-2,4.71-3.92,5.91-.14,.09-.34-.04-.36-.19Zm-5.27-22.85c-.62-2.18,1.06-5.02,1.92-6.99,.98-2.25,2.08-5.42,4.23-6.79,.14-.09,.29,.03,.28,.18-.24,2.49-2.17,4.97-3.15,7.26-.88,2.05-1.2,4.97-2.89,6.47-.12,.11-.34,.01-.38-.13Zm3.67,27.21c.04-.5,.05-1.02,.14-1.52,.09-.5,.31-.96,.49-1.44,.23-.65,1.28-.42,1.18,.27-.09,.56-.15,1.12-.44,1.62-.27,.47-.64,.86-1.03,1.24-.13,.13-.35-.01-.34-.18Zm-8.01,12.81c-.09-.02-.17-.15-.15-.24,.19-.94,.45-1.04,1.22-1.7,.99-.86,1.88-1.81,2.63-2.89,1.39-2.01,1.95-4.72,3.58-6.5,.14-.15,.45-.15,.47,.11,.2,2.48-1.42,5.29-2.75,7.31-1,1.52-2.91,4.43-5,3.93Zm-1.42,1.55c-.52,.21-1.02,.34-1.49-.02-.07-.05-.13-.15-.11-.24,.1-.55,.46-.79,.99-.91,.47-.11,1-.15,1.26,.32,.23,.42-.35,.74-.64,.85Zm66.21-42.77c-.55-.67,.15-1.7,.98-1.38,1.15,.44,2.15,1.39,3.19,2.04,.86,.54,1.91,1.01,2.21,2.05,.04,.12-.07,.31-.19,.35-1.04,.35-2.02-.3-2.91-.8-1.1-.63-2.47-1.27-3.29-2.26Zm-28.06-4.83c-.23-.11-.4-.43-.2-.66,2.29-2.71,9.03-2.04,12.35-1.79,4.51,.33,10.14,1.13,13.81,3.94,.26,.2,.12,.66-.23,.62-4.48-.55-8.67-2.23-13.24-2.48-2.63-.15-5.27-.08-7.88,.26-1.71,.22-3.02,.84-4.61,.11Zm-6.4,.86c.69-.62,1.73-.72,2.61-.84,.7-.09,1.09,.99,.38,1.24-.8,.28-1.5,.84-2.34,1.02-.82,.18-1.21-.91-.65-1.42Zm-27.38,28.97c-.09-.32-.29-.59-.33-.92-.03-.28,.04-.58,.13-.85,.21-.59,.56-1.14,.93-1.65,.36-.48,.99-.06,.87,.46-.14,.57-.22,1.16-.38,1.72-.06,.24-.14,.5-.29,.7-.17,.23-.43,.38-.59,.62-.1,.15-.3,.07-.35-.08Zm-2.01,2.69c.16-.28,.67-.16,.69,.16,.24,4.28-3.98,7.96-8,8.52-1.26,.18-1.5-1.61-.31-1.92,3.86-1,5.75-3.42,7.62-6.76Zm-13.68,8.58c-.17-1.23,1.98-1.03,2.72-1.16,.67-.12,1.23,.89,.59,1.29-.73,.47-3.1,1.38-3.31-.14Zm-3.61-.27l-.04-.07c-.13-.22-.02-.5,.15-.66,.21-.21,.43-.14,.65-.27,.51-.3,1.08,.43,.73,.88-.17,.21-.34,.36-.6,.45-.37,.13-.71,.01-.9-.34Zm2.77-3.16c-.14-.24-.16-.33-.1-.6,.12-.54,.41-.92,.98-1.04,3.96-.86,7.32-3.11,9.87-6.24,.2-.24,.61-.05,.49,.26-1.68,4.43-5.4,7.27-9.99,8.29-.53,.12-1-.24-1.25-.67Zm56.69-60.14c-.49-.54-1.05-.97-.97-1.74,.01-.14,.13-.22,.26-.21,.78,.03,1.13,.66,1.6,1.21,.38,.45,.93,.96,.74,1.59-.02,.06-.08,.11-.14,.12-.65,.11-1.1-.54-1.48-.96Zm-27.06-31.05c-1.41-.85-2.18-2.27-3.03-3.6-.09-.14,.05-.34,.21-.22,1.3,.95,2.67,1.82,3.45,3.31,.21,.4-.29,.72-.62,.52Zm-12.49-11.95c-2.18-2.22-5.02-4.62-6.05-7.62-.07-.21,.13-.38,.32-.27,2.6,1.5,4.39,4.29,6.44,6.45,2.34,2.47,5.1,4.68,7.2,7.34,.29,.37-.16,.82-.54,.59-2.75-1.64-5.14-4.21-7.37-6.49ZM22.37,116.49c.01,.47-.62,.56-.79,.14-.07-.18-.14-.37-.2-.56-1.03-2.84-1.36-6.1-1.74-9.07-.38-3.09-1.19-6.71-.2-9.73,.07-.21,.34-.22,.42-.02,1.17,2.77,.9,6.08,1.22,9.04,.33,2.98,1.03,6,1.23,9,.03,.4,.05,.8,.06,1.2ZM28.01,19c-.43-.43-.75-.84-.86-1.45-.02-.11,.09-.24,.21-.22,.55,.1,.95,.37,1.34,.75,.49,.48,1.05,.96,1.41,1.54,.29,.45-.16,1.03-.66,.71-.55-.35-.99-.87-1.45-1.33Zm-8.95,73.89c0-.6,.07-1.13,.43-1.63,.07-.09,.23-.11,.3,0,.31,.46,.41,.94,.41,1.49,0,.69,.05,1.42-.11,2.09-.12,.52-.85,.61-.97,.03-.13-.64-.08-1.32-.07-1.97ZM22.34,13.24c-.18-.24-.21-.48-.28-.76-.03-.12,.09-.23,.2-.21,.32,.03,.53,.03,.8,.19,.31,.18,.57,.45,.84,.68,.48,.42,1.1,.85,1.32,1.47,.08,.22-.07,.54-.35,.49-.69-.14-1.2-.67-1.73-1.12-.27-.23-.58-.45-.8-.74Zm-5.67,36.95c-.15-1.19-.33-2.47-.4-3.64-.05-.97,.04-1.54,.12-2.32,.03-.33,.21-.23,.31,.08,.29,.89,.5,1.44,.68,2.49,.21,1.18,.32,2.42,.46,3.62,.25,2.14,.63,4.65,.52,6.52-.04,.67-.35,.95-.59,.1-.6-2.09-.82-4.56-1.1-6.85Zm10.32-27.28c-.79-.77-1.37-1.57-1.67-2.63-.03-.12,.12-.23,.23-.19,.94,.42,1.67,1.03,2.43,1.73,.43,.4,.95,.77,1.33,1.21,.33,.38,.45,.85,.7,1.28,.09,.15-.1,.29-.23,.25-.61-.18-1.09-.18-1.6-.58-.41-.32-.8-.71-1.18-1.08Zm-1.6,89.57c-.01,.1-.02,.21-.02,.31-.01,.17-.02,.35-.02,.53h0c-.01,.35-.25,.43-.35,.24-.01-.01-.01-.02-.02-.03-.04-.08-.08-.15-.12-.22-.05-.07-.09-.13-.12-.2-.35-.57-.66-1.01-.85-1.92-.19-.92-.32-1.91-.46-2.87-.28-2-.37-3.87-.07-5.96,.04-.24,.24-.31,.31-.13,.6,1.54,.92,3.22,1.22,5.06,.17,1.06,.42,2.14,.52,3.24,.06,.66,.01,1.3-.02,1.95Zm6.95-86.01c.23,.39,.21,.64,.1,1.05-.03,.1-.15,.16-.24,.15-.47-.04-.69-.15-.98-.54-.32-.42-.26-.7-.21-1.17,.01-.15,.16-.21,.29-.18,.5,.14,.76,.19,1.05,.69Zm-13.46,34.59c.06,.82-.03,1.22-.24,1.83-.05,.15-.16,.16-.24,.07-.35-.42-.49-.76-.6-1.62-.12-.94,.02-1.35,.2-2.11,.06-.23,.19-.24,.28-.09,.35,.6,.54,.89,.61,1.91Zm15.34-31.5c2.25,.39,3.46,3.09,4.15,4.99,.09,.24-.21,.45-.39,.25-1.31-1.5-3.45-2.99-3.99-4.99-.03-.13,.1-.27,.23-.25Zm41.22,47.22c-.48-.37-.69-.76-.72-1.35-.01-.23,.14-.41,.38-.4,.58,.02,.94,.2,1.32,.64,.33,.38,.36,.75,.44,1.22,.02,.14-.1,.28-.24,.26-.45-.07-.8-.09-1.17-.37Zm4.09,4.36c-.59-.78-1.02-1.52-1.29-2.47-.06-.2,.2-.29,.34-.21,.88,.51,1.48,1.14,2.1,1.93,.43,.55,1.03,1.16,.77,1.9-.03,.08-.11,.15-.19,.16-.84,.07-1.28-.72-1.74-1.32Zm-28.91,101.74c4.38-1.08,7.38,2.92,11.18,2.29,.16,.05,.32,.08,.49,.1,2.14,.27,4.86-1.32,6.72,.54-1.86,.93-4.58,1.86-6.82,.71-.17-.09-.34-.19-.52-.3-3.66-.41-7.66-.41-11.05-3.33h0Zm17.83,8.91c-1.11-.25-1.63-.43-1.8-.59s0-.28,.29-.4c2.54-.62,5.45,.7,8.21,.81,.55,.02,1.1,0,1.65-.11,2.41-.4,4.43-1.23,6.43-1.89,.2-.07,.41-.13,.62-.18,3.16-1.63,9.16,.37,11.16-4.63,0,2-1,3-2.84,4.35-.18,.18-.35,.33-.53,.46-1.81,1.28-4.39,.44-6.3,1.08-.14,.02-.28,.04-.41,.06-1.91,.06-2.91,1.06-4.97,1.02-.66,.16-1.33,.31-1.99,.49-2.96,1.55-6.96,1.55-9.51-.46h0Zm-3.13-2.74c.28,.29,.46,.54,.56,.74,.1,.21,.12,.38,.08,.53-.09,.3-.41,.5-.79,.71-.38,.21-.83,.44-1.16,.77,1-1-1-3,1.31-2.75h0Zm36.84-7.35c-.9,.1-1.15,.1-1.15,.1,0-.2,0-.39,.03-.57,.62-2.2,2.91-2.16,4.47-2.84,.17-.08,.34-.16,.5-.26,.8-.53,1.44-1.01,1.94-1.5,.13-.12,.24-.25,.35-.37,.85-.73,1.53-1.59,2-2.46,.16-.29,.29-.58,.39-.87,.32-1.12-.68-4.12,1.32-4.12s0,3,1.04,4.17c-.08,.23-.17,.46-.28,.67-.44,.85-1.11,1.56-1.81,2.37-.1,.13-.2,.25-.31,.37-.93,1.06-1.98,2.01-3.14,2.8-.15,.1-.3,.2-.46,.3-1.05,1.33-4.05,1.33-4.9,2.23h0Zm-81.58,1.55c.42-.36-.42,.97-.44,2.74s1.31,2.35,2.28,4.39,1.93,4.75,.59,7.42c1.36-2.72-1.43-6.45-2.18-7.45-.69-.92-1.57-1.74-1.81-2.91-.32-1.56,.36-3.19,1.54-4.19h0Zm2.28,19.5c-1.15,.03-.81-.74-.63-1.57,.04-.17,.07-.33,.07-.5,.09-.36,.17-.6,.23-.74,.07-.14,.13-.19,.18-.18s.1,.1,.15,.22c.23,.59,.37,2.11,.75,.93,.09,.09,.15,.19,.18,.3,.09,.34-.13,.8-.94,1.53h0Zm136.31-7.64c-.15-.31-.15-1.31-.15-1.31,1,0,2,0,2.86,.51,.18,.05,.37,.09,.56,.13,.16,.03,.32,.05,.48,.08,.1,.28,1.1,.28,1.49,.15,.17,.02,.33,.03,.5,.05,1.16,.13,2.26,.39,3.04,1.23,1.02,1.11,.81,2.5,.26,3.78-.81,1.88-2.22,2.65-4.13,3.19-2.8,.8-5.63,1.49-8.44,2.24-.54,.14,.14-2.5,.92-2.71l4.56-1.21,.51-.13c.4-.31,1.4-.31,1.83-.38,.16-.03,.32-.07,.49-.1,.81-.18,1.6-.4,2.2-.76,.97-.58,.82-1.11,.29-1.52-.13-.1-.29-.2-.46-.28-1.94-1.26-3.94-1.26-4.89-1.96-.17-.09-.33-.19-.49-.28-.48-.28-.95-.54-1.41-.71h0Zm-7.22,8.77c2.07,1.91,.07,1.91-.86,3.32-.1,.07-.2,.14-.3,.21-.26,.19-.52,.19-.72-.06-.05-.11-.09-.23-.1-.35,.05-2.22,.05-3.22,1.98-3.13h0Zm-37.66-14.02c-.43-.55,.41-1.87,.88-1.27,2.46,3.13,9.84,4.09,8.07,9.7-.7,2.22-2.93,3.82-4.91,4.77-4.71,2.27-10.07,1.65-13.24,6.66-2.77,4.38-3.34,11.45-10.6,9.54-3.13-.82-5.31-3.34-7.73-5.3-4.68-3.79-10.3-5.11-16.2-3.91-.86,.18-.61-1.33,.05-1.46,5.55-1.14,11.06-.3,15.72,3.07,2.44,1.76,4.42,4.3,7.2,5.57,6.26,2.84,8.14-2.73,10.01-6.85,1.99-4.38,4.96-5.95,9.51-7.12,1.82-.47,4.17-.8,5.73-1.84,5.21-3.45,3.62-6.45,.24-8.35-1.83-1.03-3.4-1.51-4.73-3.2h0Zm-89.06,23.15c-1.21-.21-2.21-1.21-2.21-2.21,1,0,2,0,3.42-.01,.18,0,.35,0,.53,0,1.4-.03,2.82-.1,3.85-.25,.16,0,.32,0,.48,0,.86,.03,1.72,.14,2.6,.38,.15,.04,.3,.09,.45,.13,3.67,1.75,8.67,2.75,12.86,4.38,.17,.06,.34,.11,.51,.15,2.61,.61,5.8-.78,8.3-.78-1,1-3,2-5.12,2.63-.2,.03-.41,.05-.61,.07-.97,.09-1.93,.08-2.87,0-.19-.02-.38-.04-.56-.06-4.83-.64-9.83-3.64-14.93-4.38-.19-.04-.38-.07-.56-.11-1.13-.21-2.27-.33-3.44-.33-.19,0-.39,0-.59,.01q-1.31,.17-2.11,.38h0Z'
        className={outlineClassName}
      />
    </svg>
  );
}
