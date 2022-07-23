import React from 'react'
import { SvgIconProps, SvgIcon } from './SvgIcon'

type UpIconProps = SvgIconProps

const UpIcon: React.FC<UpIconProps> = props => {
  return (
    <SvgIcon small {...props}>
      <path
        d='M15.6658 10.5017L9.21323 4.04912C9.05403 3.88982 8.865 3.76345 8.65694 3.67723C8.44888 3.59101 8.22587 3.54663 8.00066 3.54663C7.77544 3.54663 7.55243 3.59101 7.34437 3.67723C7.13631 3.76345 6.94729 3.88982 6.78808 4.04912L0.335513 10.5017C0.220898 10.6058 0.128623 10.732 0.0642883 10.8729C-4.65699e-05 11.0137 -0.0351002 11.1661 -0.0387456 11.3209C-0.042391 11.4756 -0.0145521 11.6295 0.0430819 11.7732C0.100716 11.9169 0.186943 12.0474 0.296531 12.1568C0.406119 12.2661 0.536784 12.3521 0.680595 12.4094C0.824406 12.4667 0.978366 12.4942 1.13313 12.4903C1.2879 12.4863 1.44024 12.4509 1.58092 12.3863C1.7216 12.3216 1.84768 12.2291 1.95151 12.1143L7.79837 6.27084C7.82491 6.24423 7.85644 6.22312 7.89115 6.20872C7.92586 6.19431 7.96307 6.1869 8.00066 6.1869C8.03824 6.1869 8.07545 6.19431 8.11016 6.20872C8.14487 6.22312 8.1764 6.24423 8.20294 6.27084L14.0498 12.1143C14.1552 12.2234 14.2813 12.3105 14.4208 12.3704C14.5602 12.4303 14.7102 12.4618 14.8619 12.4631C15.0137 12.4644 15.1642 12.4355 15.3046 12.3781C15.4451 12.3206 15.5727 12.2357 15.68 12.1284C15.7873 12.0211 15.8721 11.8935 15.9296 11.7531C15.9871 11.6126 16.016 11.4621 16.0147 11.3104C16.0133 11.1586 15.9818 11.0087 15.9219 10.8692C15.862 10.7298 15.775 10.6037 15.6658 10.4983V10.5017Z'
        fill='currentColor'
      />
    </SvgIcon>
  )
}

export { UpIcon }