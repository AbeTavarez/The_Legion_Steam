class Job < ApplicationRecord
    belongs_to: :vehicle

    validates :location, presence: true
    validates :date, presence: true
    validates :job_type, presence: true
end
