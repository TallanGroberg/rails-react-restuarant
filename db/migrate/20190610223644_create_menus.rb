class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :lunch
      t.string :dinner

      t.timestamps
    end
  end
end
