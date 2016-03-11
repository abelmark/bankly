class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.string :name
      t.integer :amount
      t.text :description
      t.date :date
      t.references :user, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
