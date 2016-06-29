module Linkable
  extend ActiveSupport::Concern
  include Rails.application.routes.url_helpers

  included do
    def default_url_options
    ActionMailer::Base.smtp_settings = {
      :address        => 'smtp.sendgrid.net',
      :port           => '587',
      :authentication => :plain,
      :user_name      => ENV['SENDGRID_USERNAME'],
      :password       => ENV['SENDGRID_PASSWORD'],
      :domain         => 'heroku.com',
      :enable_starttls_auto => true
}
    end

    def md_link(text = name)
      url_method = "#{self.class.to_s.underscore}_url"
      id ? "[#{text}](#{send(url_method, self, only_path: true)})" : text.to_s
    end
  end
end
