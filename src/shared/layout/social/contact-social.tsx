import { socialLinks } from '@/constants/social';
import AnalyticHandler from '@/core/analytics/analytics-handler';

const ContactInSocialNetwork = () => {
  return (
    <div className="">
      {socialLinks.map(({ href, icon: Icon, label, analytics }, index) => {
        return (
          <div className="flex justify-start items-center mb-4" key={index}>
            <AnalyticHandler payload={analytics}>
              <a
                href={href}
                target="_blank"
                aria-label={label}
                title={`Encuentranos en ${label}`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={20} />
                  <p key={label} className="text-[16px]">
                    {label}
                  </p>
                </div>
              </a>
            </AnalyticHandler>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInSocialNetwork;
