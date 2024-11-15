'use client';
import { type ReactNode, cloneElement } from 'react';

export default function AnalyticHandler({
  payload,
  children,
}: {
  payload: object;
  children: ReactNode;
}) {
  return cloneElement(children as JSX.Element, {
    onClick: () => {
      // @ts-expect-error: gtag might be undefined
      if (typeof gtag !== 'undefined') {
        // @ts-expect-error: gtag might be undefined
        gtag('event', payload.event, payload[payload.event]);
      }

      (children as JSX.Element).props.onClick?.();
    },
  });
}
