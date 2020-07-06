class Vehicle < ApplicationRecord
  belongs_to: :user
  has_many: :jobs

  validates :brand, presence: true
  validates :model, presence: true
  validates :color, presence: true
  validates :vehicle_plate, presence: true
end
