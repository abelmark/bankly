class LineItem < ActiveRecord::Base
  belongs_to :user
  has_many :category
  

end
