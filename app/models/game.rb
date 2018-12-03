class Game < ApplicationRecord
  belongs_to :theme
  belongs_to :user_one, class_name: 'User'
  belongs_to :user_two, class_name: 'User'
end
